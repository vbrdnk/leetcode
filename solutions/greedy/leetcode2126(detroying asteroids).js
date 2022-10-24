/**
 * @param {number} mass
 * @param {number[]} asteroids
 * @return {boolean}
 */
const asteroidsDestroyed = function(mass, asteroids) {
    asteroids.sort((a, b) => a - b);

    for (let asteroid of asteroids) {
        if (mass < asteroid) {
            return false;
        }

        mass += asteroid;
    }

    return true;
};
