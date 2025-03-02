---
# Leave the homepage title empty to use the site title
title: ""
date: 2022-10-24
type: landing

design:
  # Default section spacing
  spacing: "6rem"

sections:
  - block: resume-biography-3
    content:
      # Choose a user profile to display (a folder name within `content/authors/`)
      username: admin
      text: ""
      # Show a call-to-action button under your biography? (optional)
      # button:
      #  text: Download CV
      #  url: uploads/resume.pdf
    design:
      css_class: light
      background:
        color: light
        # image:
          # Add your image background to `assets/media/`.
          # filename: stacked-peaks.svg
          # filters:
          #  brightness: 1.0
          # size: cover
          # position: center
          # parallax: false
  - block: markdown
    id: research
    content:
      title: 'Research'
      subtitle: ''
      # text: |-
      # Papers go here
    design:
      columns: '1'
  - block: markdown
    id: teaching
    content:
      title: 'Teaching'
      subtitle: ''
      # text: |-
        # Teaching goes here
    design:
      columns: '1'  
  - block: markdown
    id: cv
    content:
      title: 'CV'
      subtitle: ''
      # text: |-
       # Will add link to CV
    design:
      columns: '1'             
---
