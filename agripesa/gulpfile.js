

'use strict';
var fs = require('fs');

// Include Gulp & tools we'll use
var gulp = require('gulp');

//var fs = require('fs');

var DIST = '';
var ProjectDir="/";

var spwner=function(cmd,kill){
  var cdvSpawn = require('child_process');


  var options = {
    encoding: 'utf8',
    timeout: 0,
   // maxBuffer: 200*1024,
    killSignal: 'SIGTERM',
    //cwd: ProjectDir,
    env: process.env
  };
  var child= cdvSpawn.exec(cmd, options,function(error, stdout, stderr){



        if (error) {
          console.error('exec error:'+error.toString());
          //return;
        }
        //console.log('stdout:'+stdout.toString());
        //console.log('stderr: '+stderr.toString());
      }
  );

  child.stdout.on('data', function(data) {
    if (data) {
      console.log(data.toString());
    }
  });
  child.stderr.on('data', function(data) {
    if (data) {
      console.log("E "+data.toString());
    }
  });
  child.on('close', function(data) {
    if (data) {
      console.log("exit with code"+data.toString());
      return child;
    }
  });
    setTimeout(function() {
        if(kill) {
            console.log("killed")
            cdvSpawn.kill("SIGTERM");
        }// does not terminate the node process in the shell
    }, 2000);
}

//  the default task spin a main node

gulp.task('default',["bootnode","run1","run2"],function(cb) {
    //spwner()
})




gulp.task(' truffle compile',function(cb) {
    spwner("truffle compile")
})

gulp.task('truffle migrate',function(cb) {
    spwner("truffle migrate")
})
gulp.task('truffle build',function(cb) {
    spwner("truffle build")
})
gulp.task('run1',function(cb) {
    spwner("start geth --identity \"kilimoNet(v1.0)\" --fast --datadir data/data1 --networkid 88 --port 30307 --rpcport 8545 --ipcdisable --fast --rpcapi admin,eth,miner,web3,db,personal,net,txpool  --rpccorsdomain \"*\" --rpc --bootnodes \"enode://2b0f042c945e9e84e55b832046ebe64dea63bc12a853123e318de3bf6e0b4d4c12ab62457959d787d4d8e6610e2dcb19c883c0405874870cb6c1468705c9aca2@127.0.0.1:30301\"  console 2>> data/data1/log.log",true);
    //--ipcapi admin,eth,miner  --rpcport 8545 --port 30302 --ipcdisable
    //ac "0xad5e22595e0ca1d516c12d808d991f230692b1fc" "0x1b977c7eceab181b9f0c80ab334fc84965c198d0"
    //ballot "0x51508ba363356755e153b00e0deefb39d750da7c"
    // spwner("start geth --datadir data2 --networkid 88",true);
    //spwner("start geth --datadir data3 --networkid 88",true);
    //spwner("start geth --datadir data4 --networkid 88",true);
    // spwner("start geth --datadir data5 --networkid 88",true);
})

gulp.task('run2',function(cb) {
    spwner("start geth --identity \"kilimoNet(v1.0)\"  --datadir data/data2 --networkid 88 --port 30315 --rpcport 8549 --ipcdisable  --fast --rpcapi admin,eth,miner,web3,db,personal,net,txpool --rpccorsdomain \"*\" --rpc --bootnodes \"enode://2b0f042c945e9e84e55b832046ebe64dea63bc12a853123e318de3bf6e0b4d4c12ab62457959d787d4d8e6610e2dcb19c883c0405874870cb6c1468705c9aca2@127.0.0.1:30301\" console 2>> data/data2/log.log",true);
    //--ipcapi admin,eth,miner  --rpcport 8545 --port 30302 --ipcdisable
    //ac "0x2dac9a988ee70f76892346f3a4d69ebd11f630d1"
    // spwner("start geth --datadir data2 --networkid 88",true);
    //spwner("start geth --datadir data3 --networkid 88",true);
    //spwner("start geth --datadir data4 --networkid 88",true);
    // spwner("start geth --datadir data5 --networkid 88",true);
})
gulp.task('bootnodekey',function(cb) {
    spwner("bootnode --genkey=data/boot.key");
})
gulp.task('bootnode',function(cb) {
    spwner("bootnode --nodekey=data/boot.key");
})
gulp.task('init1',function(cb) {
    spwner("geth --datadir data/data1 init genesis.json");
    // spwner("geth --datadir data2 init genesis.json");
    // spwner("geth --datadir data3 init genesis.json");
    // spwner("geth --datadir data4 init genesis.json");
    // spwner("geth --datadir data5 init genesis.json");
})
gulp.task('init2',function(cb) {
    spwner("geth --datadir data/data2 init genesis.json");
    //spwner("bootnode --nodekey=boot.key");
})

