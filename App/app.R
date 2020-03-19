#
# This is a Shiny web application. You can run the application by clicking
# the 'Run App' button above.
#
# Find out more about building applications with Shiny here:
#
#    http://shiny.rstudio.com/
#
library(devtools)
#install_github("rstjh/mxgraphr")
install.packages("/cloud/project/mxgraphr", repos = NULL, type="source")
library(shiny)
library(mxgraphr)

# http://www.htmlwidgets.org/develop_intro.html
# Next step is to add a mxClient.js script to the mxGraphr library.
# library(sigma)
# data <- system.file("examples/ediaspora.gexf.xml", package = "sigma")
# sigma(data)

# Define UI for application that draws a histogram
library(shinydashboard)

ui <- dashboardPage(
    dashboardHeader(title="MXGraph Viewer"),
    dashboardSidebar(),
    dashboardBody(
        fluidRow(
            mxgraphrOutput("mxgraph"),
        )
    )
)

server <- function(input, output) {

    output$mxgraph <- renderMxgraphr({
        mxgraphr("Hello")
    })
}


# Run the application
shinyApp(ui, server)
