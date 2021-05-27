function initViz() {
    var containerDiv = document.getElementById("vizContainer"),
        url = "https://public.tableau.com/views/Project3_16217549970120/Story1?:language=en-US&:display_count=n&:origin=viz_share_link",
        options = {
            hideTabs: true,
            onFirstInteractive: function () {
                console.log("Run this code when the viz has finished loading.");
            }
        };

    var viz = new tableau.Viz(containerDiv, url, options);
    // Create a viz object and embed it in the container div.
    
    };


initViz()

document.getElementById("myButton").onclick = function () {
    location.href = "index.html";}
