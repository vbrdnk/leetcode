/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
const canVisitAllRooms = function(rooms) {
    const seen = new Array(rooms.length).fill(false);
    seen[0] = true;

    function dfs(node) {
        for (const neighbor of rooms[node]) {
            if (!seen[neighbor]) {
                seen[neighbor] = true;
                dfs(neighbor);
            }
        }
    }

    dfs(0);

    return seen.every(roomVisited => roomVisited === true);
};
