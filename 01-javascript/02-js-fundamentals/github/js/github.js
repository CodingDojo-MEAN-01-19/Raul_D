$("button").click(function () {
    $.get("https://api.github.com/users/1digitalnomad", displayName)
    function displayName(data) {
        console.log(data)
        $("h1").text(data.name);
    }
});