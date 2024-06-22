---
title: 'Learning Hierarchical Traversability Representations for Efficient Multi-Resolution Path Planning'

# Authors
# If you created a profile for a user (e.g. the default `admin` user), write the username (folder name) here
# and it will be replaced with their full name and linked to their profile.
authors:
  - admin
  - Manfred Huber

# # Author notes (optional)
# author_notes:
#   - 'Equal contribution'
#   - 'Equal contribution'

date: '2022-10-09T00:00:00Z'
doi: '10.1109/SMC53654.2022.9945075'

# Schedule page publish date (NOT publication's date).
publishDate: '2022-10-09T00:00:00Z'

# Publication type.
# Accepts a single type but formatted as a YAML list (for Hugo requirements).
# Enter a publication type from the CSL standard.
publication_types: ['paper-conference']

# # Publication name and optional abbreviated publication name.
publication: "*2022 IEEE International Conference on Systems, Man, and Cybernetics (SMC)*"
# publication_short: "*IEEE SMC*"

abstract: Path planning on grid-based obstacle maps is an essential and much-studied problem with applications in robotics and autonomy. Traditionally, in the AI community, heuristic search methods (e.g., based on Dijkstra, A∗, or random trees) are used to solve this problem. This search, however, incurs a high computational cost that grows with the size and resolution of the obstacle grid and has to be mitigated with effective heuristics to allow path planning in real-time. This work introduces a learning framework using a deep neural network with a stackable convolution kernel to establish a hierarchy of directional traversability representations with decreasing resolution that can serve as an efficient heuristic to guide a multi-resolution path planner. This path planner finds paths efficiently, starting on the lowest resolution traversability representation and then refining the path incrementally through the hierarchy until it addresses the original obstacle constraints. We demonstrate the benefits and applicability of this approach on datasets of maps created to represent both indoor and outdoor environments to represent different real-world applications. The conducted experiments show that our method can accelerate path planning by 40% in indoor environments and 65% in outdoor environments compared to the same heuristic search method applied to the original obstacle map, which demonstrates the effectiveness of this method.

# Summary. An optional shortened abstract.
# summary: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis posuere tellus ac convallis placerat. Proin tincidunt magna sed ex sollicitudin condimentum.

tags: []

# Display this page in the Featured widget?
featured: true

# Custom links (uncomment lines below)
# links:
# - name: Custom Link
#   url: http://example.org

# url_pdf: ''
# url_code: 'https://github.com/HugoBlox/hugo-blox-builder'
# url_dataset: 'https://github.com/HugoBlox/hugo-blox-builder'
# url_poster: ''
# url_project: ''
# url_slides: ''
# url_source: 'https://github.com/HugoBlox/hugo-blox-builder'
# url_video: 'https://youtube.com'

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder.
image:
  # caption: 'Hierarchical Path Planning'
  focal_point: ''
  preview_only: false

# Associated Projects (optional).
#   Associate this publication with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `internal-project` references `content/project/internal-project/index.md`.
#   Otherwise, set `projects: []`.
# projects:
#   - example

# Slides (optional).
#   Associate this publication with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides: "example"` references `content/slides/example/index.md`.
#   Otherwise, set `slides: ""`.
# slides: example
---

<!-- {{% callout note %}}
Click the _Cite_ button above to demo the feature to enable visitors to import publication metadata into their reference management software.
{{% /callout %}}

{{% callout note %}}
Create your slides in Markdown - click the _Slides_ button to check out the example.
{{% /callout %}}

Add the publication's **full text** or **supplementary notes** here. You can use rich formatting such as including [code, math, and images](https://docs.hugoblox.com/content/writing-markdown-latex/). -->
