from flask import Flask,request,render_template
import os
import csv

app = Flask(__name__)
ipDict = {}



def write_to_csv(file_path,  data,headers = ["Name","Roll","Mobile"]):
    file_exists = os.path.exists(file_path)

    with open(file_path, 'a', newline='') as csv_file:
        csv_writer = csv.writer(csv_file)

        if not file_exists:
            csv_writer.writerow(headers)

        csv_writer.writerow(data)


def writeIp(data,file_path="ipAddress.txt"):
    with open(file_path, 'a', newline='') as f:
        f.write(data+"\n")





@app.route('/')
def home():
    return render_template("demo.html")

@app.route('/register', methods=['POST'])
def register():
    if request.method == 'POST':
        Name = request.form.get('Name')  
        Roll = request.form.get('Roll')  
        Mobile = request.form.get('Mobile')  
        ip = request.remote_addr

        if ipDict.get(ip,None) is None:
            ipDict[ip] = True
            data_to_write = [Name, Roll,Mobile]
            write_to_csv("entries.csv", data_to_write)
            return "Entry Stored" 

        return f'IP exists {Name}'

    else:
        return 'Invalid method'

if __name__ == '__main__':
    file_exists = os.path.exists("ipAddress.txt")
    if(not file_exists):
        with open("ipAddress.txt", "w") as f: pass
    
    replaceNewLine = lambda x: x.replace("\n", "")
    with open("ipAddress.txt","r+") as f:
        addresses = tuple(map(replaceNewLine,f.readlines()))
        f.truncate(0)
    print(addresses)
    
    ipDict = ipDict.fromkeys(addresses,True)
    app.run(host='0.0.0.0', port=5000)
    print(ipDict)
    [writeIp(ip) for ip in ipDict.keys()]

