from flask import *

app = Flask('3rd_assessment')
#ez itt a betű számolós dictionary python kóddal:
def make_dict(data):
    dict1 = {}
    for i in data:
        if i not in dict1:
            dict1[i] = 1
        else:
            dict1[i] += 1
    return dict1                
#reverse string python kóddal:
def reverse(text):
    output = ""
    for i in text:
        output = i + output
    return output
#kell majd json.be átraknod az ez az egy függvény:
def make_json(data):
    x = make_dict(data)
    myjson = json.dumps(x)
    return myjson




@app.route("/")
def index():
    return render_template('index.html')
#ezt a routot kell neked legépelned(a többi meg van előre írva) 
@app.route("/count_letters", methods=[ 'POST'])
def count_letters():
    list1 = request.json
    reverse = "imalav"
    return json.dumps(reverse)  

if __name__ == "__main__":
      
    app.run(debug=True, host='0.0.0.0', port=9999)

       



        
            
