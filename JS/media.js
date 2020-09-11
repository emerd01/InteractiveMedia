d3.select("#Smithsonian")
    .on("click", function()
{
d3.select("#animals")
    .classed("hidden", false);
})
d3.select("#cat")
    .on("click",function()
{
    d3.select("#banner")
    .text("His Royal Highness of Wales")
})
d3.select("#panda")
    .on("click",function()
{
    d3.select("#banner")
    .text("Sir Rothembaum having his mid-afternoon snack")
})
d3.select("#flamingo")
    .on("click",function()
{
    d3.select("#banner")
    .text("A Flock of the Bourgeoisie")
})