with open("list.txt", "r") as file:
    websites = file.readlines()

modified_websites = []
for website in websites:
    website = website.strip()
    modified_http = '"http://' + website + '/*", '
    modified_https = '"https://' + website + '/*", '
    modified_websites.extend([modified_http, modified_https])

with open("output.txt", "w") as file:
    file.write("\n".join(modified_websites))
