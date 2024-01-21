import sys

with open("ipJson.json","w") as f:
    s = "{\n" + f"\"ipAddress\":\"{sys.argv[1]}\"" + "\n}"
    f.write(s)
