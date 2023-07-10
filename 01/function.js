function addTwo(num) {
    //return num + 1
    return "hello";
}
var getHero = function (hero) {
    return "the hero is ".concat(hero);
};
var heros = ["thor", "superman", "captan america"];
heros.map(function (hero) {
    console.log(getHero(hero));
});
