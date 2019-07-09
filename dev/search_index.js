var documenterSearchIndex = {"docs":
[{"location":"#MicrobiomePlots.jl-1","page":"Home","title":"MicrobiomePlots.jl","text":"","category":"section"},{"location":"#","page":"Home","title":"Home","text":"Plotting functionality for Microbiome.jl using Plots.jl recipes","category":"page"},{"location":"recipes/#Recipes-Docs-1","page":"Recipes","title":"Recipes Docs","text":"","category":"section"},{"location":"recipes/#","page":"Recipes","title":"Recipes","text":"Modules = [MicrobiomePlots]\nPrivate = false","category":"page"},{"location":"recipes/#MicrobiomePlots.AnnotationBar","page":"Recipes","title":"MicrobiomePlots.AnnotationBar","text":"AnnotationBar(::Array{<:Color,1})\n\nArray of colors for plotting a grid. Use plot(::AnnotationBar; kwargs...)\n\n\n\n\n\n","category":"type"},{"location":"recipes/#MicrobiomePlots.annotationbar-Tuple{AbstractArray{#s14,1} where #s14<:ColorTypes.Color}","page":"Recipes","title":"MicrobiomePlots.annotationbar","text":"annotationbar(colors::AbstractArray{<:Color,1})\nannotationbar(labels::AbstractArray{<:AbstractString,1})\nannotationbar(labels::AbstractArray{<:AbstractString,1}, colormap::Dict{<:AbstractString,<:Color})\nannotationbar(labels::AbstractArray{<:AbstractString,1}, colors::AbstractArray{<:Color,1})\n\nCreate an AnnotationBar from a vector of colors or a vector of labels (Strings).\n\nA vector of Colors will be used directly to create an AnnotationBar\nFor an array of Strings, each unique value will be assigned a random color from Colors.color_names.\nA vector of labels may be passed with a Dict with keys for each label mapping to a Color value.\nA vector of labels and colors may be used.\nIf the lengths of these vectors are the same, the colors will be used to create an AnnotationBar\nIf the length of labels is longer than the length of colors, each unique label will be assigned to one of the colors\n\n\n\n\n\n","category":"method"},{"location":"contributing/#Contributing-1","page":"Contributing","title":"Contributing","text":"","category":"section"},{"location":"contributing/#","page":"Contributing","title":"Contributing","text":"The BioJulia organisation has a set of contribution guidelines which apply to all BioJulia projects. These guidelines are available here and it is recommended all new contributors read these guidelines before opening a pull request.","category":"page"},{"location":"contributing/#Making-a-contribution-1","page":"Contributing","title":"Making a contribution","text":"","category":"section"},{"location":"contributing/#","page":"Contributing","title":"Contributing","text":"If you're interested in adding functionality to Microbiome.jl, please feel free to open an issue or a pull request (PR) against the master branch. If you're not yet ready for that, you can also ask questions/start a discussion in the Bio.jl gitter channel. ","category":"page"},{"location":"contributing/#","page":"Contributing","title":"Contributing","text":"Work-in-progress PRs are fine, as discussion about approach and code review can happen in the PR.","category":"page"},{"location":"contributing/#","page":"Contributing","title":"Contributing","text":"Before merging, any new code should be unit tested and have docs for newly exported functions, but if you don't know how to do this, don't worry, we can help!","category":"page"}]
}