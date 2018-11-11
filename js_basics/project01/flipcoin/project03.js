const flipCoin = {
    coin: ['head', 'tails'],
    flip: function () {
        return this.coin[Math.floor(Math.random() * this.coin.length)]
    },
    flipMany: function () {
        let tails = 0;
        let heads = 0;
        for (let i = 0; i <= 100; i++) {
            if (this.flip() === 'tails') {
                tails++;
            } else {
                heads++;
            }
        }
        console.log(`You flipped tails ${tails}x and heads ${heads}x`)
    }
};
