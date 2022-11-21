/**
 * Your LUPrefix object will be instantiated and called as such:
 * var obj = new LUPrefix(n)
 * obj.upload(video)
 * var param_2 = obj.longest()
 */

class LUPrefix {
    uploadedVideos = new Set();

    /**
     * @param {number} n
     */
    constructor(n) {
        this.prefixCapacity = n;
        this.maxPrefixLength = 0;
    }

    /**
     * @param {number} video
     * @return {void}
     */
    upload(video) {
        this.uploadedVideos.add(video);

        while (this.uploadedVideos.has(this.maxPrefixLength + 1)) this.maxPrefixLength++;
    }

    /**
     * @return {number}
     */
    longest() {
        return this.maxPrefixLength;
    }
}

const server = new LUPrefix(4);   // Initialize a stream of 4 videos.
server.upload(3);              // Upload video 3.
console.log(server.longest());       // Since video 1 has not been uploaded yet, there is no prefix.// So, we return 0.
server.upload(1);              // Upload video 1.
console.log(server.longest());       // The prefix [1] is the longest uploaded prefix, so we return 1.
server.upload(2);              // Upload video 2.
console.log(server.longest());       // The prefix [1,2,3] is the longest uploaded prefix, so we return 3.
