export default class Vaisseau {
    constructor(x, y, image, shieldImage, deathImage) {
        this.x = x;
        this.y = y;
        this.image = image;
        this.shieldImage = shieldImage;
        this.deathImage = deathImage;
        this.shield = false; // Word-game shield (timer-based)
        this.shieldedFromRocks = false; // Rock collision protection (1 hit)
        this.isDead = false; // Death state
        this.largeur = 100;
        this.hauteur = 100;
    }

    draw(ctx) {
        let imgToUse = this.image;
        if (this.isDead && this.deathImage && this.deathImage.complete && this.deathImage.naturalWidth > 0) {
            imgToUse = this.deathImage;
        } else if ((this.shield || this.shieldedFromRocks) && this.shieldImage && this.shieldImage.complete && this.shieldImage.naturalWidth > 0) {
            imgToUse = this.shieldImage;
        }
        if (imgToUse.complete && imgToUse.naturalWidth > 0) {
            const baseScale = Math.min(this.hauteur / imgToUse.naturalHeight);
            const w = imgToUse.naturalWidth * baseScale;
            const h = imgToUse.naturalHeight * baseScale;
            const dx = this.x + (this.largeur - w) / 2;
            const dy = this.y + (this.hauteur - h) / 2;
            ctx.drawImage(imgToUse, dx, dy, w, h);
        }
    }
}