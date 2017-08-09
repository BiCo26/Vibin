Error: Cannot find module 'morgan'
    at Function.Module._resolveFilename (module.js:485:15)
    at Function.Module._load (module.js:437:25)
    at Module.require (module.js:513:17)
    at require (internal/module.js:11:18)
    at Object.<anonymous> (/Users/b/Desktop/Vibin/app.js:2:16)
    at Module._compile (module.js:569:30)
    at Object.Module._extensions..js (module.js:580:10)
    at Module.load (module.js:503:32)
    at tryModuleLoad (module.js:466:12)
    at Function.Module._load (module.js:458:3)
[nodemon] app crashed - waiting for file changes before starting...
Killed: 9


--Added "morgan" in package.json
--re-installed morgan in terminal
--Seems as if all the npm installs i executed in the beginning of my project got deleted.



nodemon] starting `node app.js`
module.js:487
    throw err;
    ^

Error: Cannot find module 'body-parser'
    at Function.Module._resolveFilename (module.js:485:15)
    at Function.Module._load (module.js:437:25)
    at Module.require (module.js:513:17)
    at require (internal/module.js:11:18)
    at Object.<anonymous> (/Users/b/Desktop/Vibin/app.js:4:20)
    at Module._compile (module.js:569:30)
    at Object.Module._extensions..js (module.js:580:10)
    at Module.load (module.js:503:32)
    at tryModuleLoad (module.js:466:12)
    at Function.Module._load (module.js:458:3)

    --After adding npm carousel - all of my npm packages i downloaded in the beginning stage of my project seem to have gotten deleted.

    $ git push origin master
Counting objects: 66, done.
Delta compression using up to 4 threads.
Compressing objects: 100% (64/64), done.
Writing objects: 100% (66/66), 488.33 MiB | 12.48 MiB/s, done.
Total 66 (delta 28), reused 0 (delta 0)
remote: Resolving deltas: 100% (28/28), completed with 14 local objects.
remote: warning: File public/assets/Delta.mp3 is 82.41 MB; this is larger than GitHub's recommended maximum file size of 50.00 MB
remote: error: GH001: Large files detected. You may want to try Git Large File Storage - https://git-lfs.github.com.
remote: error: Trace: 269a8cc82b597b8ccd0d4dea80fdfce7
remote: error: See http://git.io/iEPt8g for more information.
remote: error: File public/assets/Alpha.mp3 is 247.52 MB; this exceeds GitHub's file size limit of 100.00 MB
remote: error: File public/assets/IsochronicTones.BinauralBeats.mp3 is 137.58 MB; this exceeds GitHub's file size limit of 100.00 MB
To https://github.com/BiCo26/Vibin.git
 ! [remote rejected] master -> master (pre-receive hook declined)
error: failed to push some refs to 'https://github.com/BiCo26/Vibin.git'

--Git push issues for a second time


--CANNOT PUSH -- FILE IS TOO LARGE

b ~/Desktop/Vibin on master
$ git push origin master
Counting objects: 106, done.
Delta compression using up to 4 threads.
Compressing objects: 100% (102/102), done.
Writing objects: 100% (106/106), 488.33 MiB | 9.86 MiB/s, done.
Total 106 (delta 47), reused 0 (delta 0)
remote: Resolving deltas: 100% (47/47), completed with 16 local objects.
remote: warning: File public/assets/Delta.mp3 is 82.41 MB; this is larger than GitHub's recommended maximum file size of 50.00 MB
remote: error: GH001: Large files detected. You may want to try Git Large File Storage - https://git-lfs.github.com.
remote: error: Trace: d82e5ab01f87886fb1aa475673b96984
remote: error: See http://git.io/iEPt8g for more information.
remote: error: File public/assets/Alpha.mp3 is 247.52 MB; this exceeds GitHub's file size limit of 100.00 MB
remote: error: File public/assets/IsochronicTones.BinauralBeats.mp3 is 137.58 MB; this exceeds GitHub's file size limit of 100.00 MB
To https://github.com/BiCo26/Vibin.git
 ! [remote rejected] master -> master (pre-receive hook declined)
error: failed to push some refs to 'https://github.com/BiCo26/Vibin.git'