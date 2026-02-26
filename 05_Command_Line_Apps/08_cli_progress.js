const cliProgress = require('cli-progress');

const bar1 = new cliProgress.SingleBar(
    {},
    cliProgress.Presets.shades_classic
);

bar1.start(100, 0);

let progress = 0;

const interval = setInterval(() => {
    progress += 1;
    bar1.update(progress);

    if (progress >= 100) {
        clearInterval(interval);
        bar1.stop();
    }
}, 100);
