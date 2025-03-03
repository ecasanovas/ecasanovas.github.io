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
      text: |-
        ### Work in Progress

        "Labor force growth and firm dynamics in the U.S. and Europe"
    design:
      columns: '1'
  - block: markdown
    id: teaching
    content:
      title: 'Teaching'
      subtitle: ''
      text: |-
        **Macroeconomics - ECON0066**  
        UCL MSc, TA for Vincent Sterk  (Fall 2023/2024)

        **Advanced Macroeconomic Theory - ECON0057**  
        UCL MSc, TA for Alan Olivi  (Spring 2022/2023)

        **Macroeconomics - BPEP-UB 2**  
        NYU Stern - London BSc, TA for Julen Esteban-Pretel  (Fall 2022)
    design:
      columns: '1'  
  #- block: markdown
  #  id: cv
  #  content:
  #    title: 'CV'
  #    subtitle: ''
  #    text: |-
  #      Will add link to CV
  #  design:
  #    columns: '1'             
---
