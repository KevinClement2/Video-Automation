function main() {
    var mainComp = app.project.item(5);
    var musicComp = mainComp.layer(1);
    mainComp.duration = musicComp.source.duration;
}
main();

