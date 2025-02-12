---
date: 2025-02-12T11:12:58+0530
draft: true
title: My First Blog Post
---

Here is a bash script that creates a markdown file with the specified template in the directory 'public/assets/readmes/':

```bash
#!/bin/bash

# Function to create a new markdown file
create_markdown_file() {
    # Get the current date and time in the required format
    current_date=$(date +"%Y-%m-%dT%H:%M:%S%z")

    # Get the title from the user
    read -p "Enter the title of the markdown file: " title

    # Replace spaces with underscores for the filename
    filename="${title// /_}.md"
    
    # Define the directory
    dir="public/assets/readmes/"
    
    # Create the directory if it doesn't exist
    mkdir -p $dir
    
    # Define the file path
    filepath="${dir}${filename}"

    # Create the markdown file with the template
    cat <<EOF > $filepath
---
date: ${current_date}
draft: true
title: ${title}
---

EOF

    echo "Markdown file created at ${filepath}"
}

# Call the function
create_markdown_file
```

This script will prompt the user for the title of the markdown file and then create the file with the current date and time, `draft` set to `true`, and the provided title. The file will be saved in the directory 'public/assets/readmes/'.
