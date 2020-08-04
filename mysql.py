from flask import Flask, jsonify, request 
from flask_mysqldb import MySQL 
from flask_cors import CORS
import csv
from werkzeug.utils import secure_filename
import pandas as pd 
from sklearn.tree import DecisionTreeClassifier
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import MinMaxScaler
from sklearn.neighbors import KNeighborsClassifier
from sklearn.naive_bayes import GaussianNB
from sklearn.svm import SVC
import numpy as np
import json
import random
# Data
Tests = []
data='C:\\Users\\EM\Documents\\GitHub\\MoreCodes-Youtube\\react-flask-Meriem\\Dataaprotine.csv'
datapred='C:\\Users\\EM\Documents\\GitHub\\MoreCodes-Youtube\\react-flask-Meriem\\predict.csv'
app = Flask(__name__)
cors = CORS(app)
@app.route('/api/tasks', methods=['GET'])
def get_all_tasks():
    title = request.get_json()
    title=str(title)
    print(title)
    result = {"Aziz": "Aziz"}
    print(result)
    return  jsonify({'result' : result})



@app.route('/api/bayes', methods=['GET'])
def bayes():
    title = request.get_json()
    title=str(title)
    print(title)
    Tests = []
    moleculs = pd.read_csv(data)
    moleculs.head()
    feature_names = ['measured log solubility in mols per litre', 'Minimum Degree', 'Number of H-Bond Donors']
    X = moleculs[feature_names]
    y = moleculs['Binding']
    # Create Training and Test Sets and Apply Scaling
    X_train, X_test, y_train, y_test = train_test_split(X, y, random_state=0)
    scaler = MinMaxScaler()
    X_train = scaler.fit_transform(X_train)
    X_test = scaler.transform(X_test)
    # Models
    # Gaussian Naive Bayes   
    gnb = GaussianNB()
    gnb.fit(X_train, y_train)
    print('Accuracy of GNB classifier on training set: {:.2f}'.format(gnb.score(X_train, y_train)))
    print('Accuracy of GNB classifier on test set: {:.2f}'.format(gnb.score(X_test, y_test)))
    Accuracy_training='Accuracy of GNB classifier on training set: {:.2f}'.format(gnb.score(X_train, y_train))
    Accuracy_test = 'Accuracy of GNB classifier on test set: {:.2f}'.format(gnb.score(X_test, y_test))
    Tests = gnb.predict(X_test).tolist()
    return Accuracy_training

@app.route('/api/bayes2', methods=['GET'])
def bayes2():
    title = request.get_json()
    title=str(title)
    print(title)
    Tests = []
    moleculs = pd.read_csv(data)
    moleculs.head()
    feature_names = ['measured log solubility in mols per litre', 'Minimum Degree', 'Number of H-Bond Donors']
    X = moleculs[feature_names]
    y = moleculs['Binding']
    # Create Training and Test Sets and Apply Scaling
    X_train, X_test, y_train, y_test = train_test_split(X, y, random_state=0)
    scaler = MinMaxScaler()
    X_train = scaler.fit_transform(X_train)
    X_test = scaler.transform(X_test)
    # Models
    # Gaussian Naive Bayes   
    gnb = GaussianNB()
    gnb.fit(X_train, y_train)
    print('Accuracy of GNB classifier on training set: {:.2f}'.format(gnb.score(X_train, y_train)))
    print('Accuracy of GNB classifier on test set: {:.2f}'.format(gnb.score(X_test, y_test)))
    Accuracy_training='Accuracy of GNB classifier on training set: {:.2f}'.format(gnb.score(X_train, y_train))
    Accuracy_test = 'Accuracy of GNB classifier on test set: {:.2f}'.format(gnb.score(X_test, y_test))
    Tests = gnb.predict(X_test).tolist()
    return Accuracy_test
     

@app.route('/api/Neighbors', methods=['GET'])
def Neighbors():
    title = request.get_json()
    title=str(title)
    print(title)
    Tests = []
    moleculs = pd.read_csv(data)
    moleculs.head()
    feature_names = ['measured log solubility in mols per litre', 'Minimum Degree', 'Number of H-Bond Donors']
    X = moleculs[feature_names]
    y = moleculs['Binding']
    # Create Training and Test Sets and Apply Scaling
    X_train, X_test, y_train, y_test = train_test_split(X, y, random_state=0)
    scaler = MinMaxScaler()
    X_train = scaler.fit_transform(X_train)
    X_test = scaler.transform(X_test)
    # Models
    # K-Nearest Neighbors   
    knn = KNeighborsClassifier()
    knn.fit(X_train, y_train)
    print('Accuracy of K-NN classifier on training set: {:.2f}'.format(knn.score(X_train, y_train)))
    print('Accuracy of K-NN classifier on test set: {:.2f}'.format(knn.score(X_test, y_test)))
    Accuracy_training='Accuracy of K-NN classifier on training set: : {:.2f}'.format(knn.score(X_train, y_train))
    Accuracy_test = 'Accuracy of K-NN classifier on test set: {:.2f}'.format(knn.score(X_test, y_test))
    Tests = knn.predict(X_test).tolist()
    return Accuracy_training

@app.route('/api/Neighborspredict', methods=['POST'])
def Neighborspredict():
    title = request.get_json()
    print(title['Name'])
    myCsvRow=str(title['Name'])+','+'LSN2322600|LY2228820 DIMESYLATE|RALIMETINIB MESYLATE'+','+str(title['Minimum'])+','+'612.75,2,4' + ','+str(title['Number'])+','+','+str(title['measured'])+','+'CC12CCC3C(CCc4cc(O)ccc34)C2CCC1O,1 1 1 0 0 0 0 1 1 0,0'
    with open('predict.csv','a') as fd:
      fd.write("\n"+myCsvRow)
    Tests = []
    moleculs = pd.read_csv(data)
    moleculs.head()
    feature_names = ['measured log solubility in mols per litre', 'Minimum Degree', 'Number of H-Bond Donors']
    X = moleculs[feature_names]
    y = moleculs['Binding']
    # Create Training and Test Sets and Apply Scaling
    X_train, X_test, y_train, y_test = train_test_split(X, y, random_state=0)
    scaler = MinMaxScaler()
    X_train = scaler.fit_transform(X_train)
    X_test = scaler.transform(X_test)
    # Models
    # K-Nearest Neighbors   
    knn = KNeighborsClassifier()
    knn.fit(X_train, y_train)
    # new instances where we do not know the answer
    moleculsnew = pd.read_csv(datapred)
    feature_names = ['measured log solubility in mols per litre', 'Minimum Degree', 'Number of H-Bond Donors']
    Xnew=moleculsnew[feature_names]
    ynew = knn.predict(Xnew)
    # show the inputs and predicted outputs
    return str(ynew[len(ynew)-1])

@app.route('/api/Neighbors2', methods=['GET'])
def Neighbors2():
    title = request.get_json()
    title=str(title)
    print(title)
    Tests = []
    moleculs = pd.read_csv(data)
    moleculs.head()
    feature_names = ['measured log solubility in mols per litre', 'Minimum Degree', 'Number of H-Bond Donors']
    X = moleculs[feature_names]
    y = moleculs['Binding']
    # Create Training and Test Sets and Apply Scaling
    X_train, X_test, y_train, y_test = train_test_split(X, y, random_state=0)
    scaler = MinMaxScaler()
    X_train = scaler.fit_transform(X_train)
    X_test = scaler.transform(X_test)
    # Models
    # K-Nearest Neighbors   
    knn = KNeighborsClassifier()
    knn.fit(X_train, y_train)
    print('Accuracy of K-NN classifier on training set: {:.2f}'.format(knn.score(X_train, y_train)))
    print('Accuracy of K-NN classifier on test set: {:.2f}'.format(knn.score(X_test, y_test)))
    Accuracy_training='Accuracy of K-NN classifier on training set:  {:.2f}'.format(knn.score(X_train, y_train))
    Accuracy_test = 'Accuracy of K-NN classifier on test set: {:.2f}'.format(knn.score(X_test, y_test))
    Tests = knn.predict(X_test).tolist()
    print(Tests[len(Tests)-1])
    return Accuracy_test


    title = request.get_json()
    print(title['Name'])
    myCsvRow=str(title['Name'])+','+str(title['ESOL'])+',2,'+str(title['Weight'])+','+str(title['HBond'])+','+str(title['Rings'])+','+str(title['Rotatable'])+',,,'
    with open('predict.csv','a') as fd:
      fd.write("\n"+myCsvRow)
    Tests = []
    moleculs = pd.read_csv(data)
    moleculs.head()
    feature_names = ['measured log solubility in mols per litre', 'Minimum Degree', 'Number of H-Bond Donors']
    X = moleculs[feature_names]
    y = moleculs['Binding']
    # Create Training and Test Sets and Apply Scaling
    X_train, X_test, y_train, y_test = train_test_split(X, y, random_state=0)
    scaler = MinMaxScaler()
    X_train = scaler.fit_transform(X_train)
    X_test = scaler.transform(X_test)
    # Models
    # Support Vector Machine    
    svm = SVC()
    svm.fit(X_train, y_train)
    # new instances where we do not know the answer
    moleculsnew = pd.read_csv(datapred)
    feature_names =['measured log solubility in mols per litre', 'Minimum Degree', 'Number of H-Bond Donors']
    Xnew=moleculsnew[feature_names]
    ynew = svm.predict(Xnew)
    # show the inputs and predicted outputs
    return str(ynew[len(ynew)-1])

@app.route('/api/svm', methods=['GET'])
def svm():
    title = request.get_json()
    title=str(title)
    print(title)
    a="svm"
    Tests = []
    moleculs = pd.read_csv(data)
    moleculs.head()
    feature_names = ['measured log solubility in mols per litre', 'Minimum Degree', 'Number of H-Bond Donors']
    X = moleculs[feature_names]
    y = moleculs['Binding']
    # Create Training and Test Sets and Apply Scaling
    X_train, X_test, y_train, y_test = train_test_split(X, y, random_state=0)
    scaler = MinMaxScaler()
    X_train = scaler.fit_transform(X_train)
    X_test = scaler.transform(X_test)
    # Models
    # Support Vector Machine  
    svm = SVC()
    svm.fit(X_train, y_train)
    print('Accuracy of SVM classifier on training set: {:.2f}'.format(svm.score(X_train, y_train)))
    print('Accuracy of SVM classifier on test set: {:.2f}'.format(svm.score(X_test, y_test)))
    Accuracy_training='Accuracy of SVM classifier on training set: {:.2f}'.format(svm.score(X_train, y_train))
    Accuracy_test = 'Accuracy of SVM classifier on test set:  {:.2f}'.format(svm.score(X_test, y_test))
    Tests = svm.predict(X_test).tolist()
    return Accuracy_training

@app.route('/api/svm2', methods=['GET'])
def svm2():
    title = request.get_json()
    title=str(title)
    print(title)
    a="svm"
    Tests = []
    moleculs = pd.read_csv(data)
    moleculs.head()
    feature_names = ['measured log solubility in mols per litre', 'Minimum Degree', 'Number of H-Bond Donors']
    X = moleculs[feature_names]
    y = moleculs['Binding']
    # Create Training and Test Sets and Apply Scaling
    X_train, X_test, y_train, y_test = train_test_split(X, y, random_state=0)
    scaler = MinMaxScaler()
    X_train = scaler.fit_transform(X_train)
    X_test = scaler.transform(X_test)
    # Models
    # Support Vector Machine  
    svm = SVC()
    svm.fit(X_train, y_train)
    print('Accuracy of SVM classifier on training set: {:.2f}'.format(svm.score(X_train, y_train)))
    print('Accuracy of SVM classifier on test set: {:.2f}'.format(svm.score(X_test, y_test)))
    Accuracy_training='Accuracy of SVM classifier on training set: {:.2f}'.format(svm.score(X_train, y_train))
    Accuracy_test = 'Accuracy of SVM classifier on test set:  {:.2f}'.format(svm.score(X_test, y_test))
    Tests = svm.predict(X_test).tolist()
    return Accuracy_test

@app.route('/api/task', methods=['GET'])
def add_ta():
    title = request.get_json()
    title=str(title)
    print(title)
    a="Dataaaaaaaaaa"
    return  a
@app.route('/api/arbreredict', methods=['POST'])
def Arbrepredict():
    title = request.get_json()
    print(title['Name'])
    myCsvRow=str(title['Name'])+','+str(title['ESOL'])+',2,'+str(title['Weight'])+','+str(title['HBond'])+','+str(title['Rings'])+','+str(title['Rotatable'])+',,,'
    with open('predict.csv','a') as fd:
      fd.write("\n"+myCsvRow)
    Tests = []
    moleculs = pd.read_csv(data)
    moleculs.head()
    feature_names = ['measured log solubility in mols per litre', 'Minimum Degree', 'Number of H-Bond Donors']
    X = moleculs[feature_names]
    y = moleculs['Binding']
    # Create Training and Test Sets and Apply Scaling
    X_train, X_test, y_train, y_test = train_test_split(X, y, random_state=0)
    scaler = MinMaxScaler()
    X_train = scaler.fit_transform(X_train)
    X_test = scaler.transform(X_test)
    # Models
    # 1-Decision Tree
    clf = DecisionTreeClassifier().fit(X_train, y_train)
    # new instances where we do not know the answer
    moleculsnew = pd.read_csv(datapred)
    feature_names = ['measured log solubility in mols per litre', 'Minimum Degree', 'Number of H-Bond Donors']
    Xnew=moleculsnew[feature_names]
    ynew = clf.predict(Xnew)
    # show the inputs and predicted outputs
    return str(ynew[len(ynew)-1])
       
@app.route('/api/arbre', methods=['GET'])
def add_arbre():
    title = request.get_json()
    title=str(title)
    print(title+"Arbre")    
    Tests = []
    moleculs = pd.read_csv(data)
    moleculs.head()
    feature_names = ['measured log solubility in mols per litre', 'Minimum Degree', 'Number of H-Bond Donors']
    X = moleculs[feature_names]
    y = moleculs['Binding']
    # Create Training and Test Sets and Apply Scaling
    X_train, X_test, y_train, y_test = train_test_split(X, y, random_state=0)
    scaler = MinMaxScaler()
    X_train = scaler.fit_transform(X_train)
    X_test = scaler.transform(X_test)
    # Models
    # 1-Decision Tree
    clf = DecisionTreeClassifier().fit(X_train, y_train)
    print('Accuracy of Decision Tree classifier on training set: {:.2f}'.format(clf.score(X_train, y_train)))
    print('Accuracy of Decision Tree classifier on test set: {:.2f}'.format(clf.score(X_test, y_test)))
    Accuracy_training='Accuracy of Decision Tree classifier on training set: {:.2f}'.format(clf.score(X_train, y_train))     
    # Numpy to List of the prediction
    Tests=clf.predict(X_test).tolist()
    print(Tests)
    return Accuracy_training

@app.route('/api/arbre2', methods=['GET'])
def add_arbre2():
    title = request.get_json()
    title=str(title)
    print(title+"Arbre")    
    Tests = []
    moleculs = pd.read_csv(data)
    moleculs.head()
    feature_names = ['measured log solubility in mols per litre', 'Minimum Degree', 'Number of H-Bond Donors']
    X = moleculs[feature_names]
    y = moleculs['Binding']
    # Create Training and Test Sets and Apply Scaling
    X_train, X_test, y_train, y_test = train_test_split(X, y, random_state=0)
    scaler = MinMaxScaler()
    X_train = scaler.fit_transform(X_train)
    X_test = scaler.transform(X_test)
    # Models
    # 1-Decision Tree
    clf = DecisionTreeClassifier().fit(X_train, y_train)
    print('Accuracy of Decision Tree classifier on training set: {:.2f}'.format(clf.score(X_train, y_train)))
    print('Accuracy of Decision Tree classifier on test set: {:.2f}'.format(clf.score(X_test, y_test)))
    Accuracy_test='Accuracy of Decision Tree classifier on test set: {:.2f}'.format(clf.score(X_test, y_test))
    # Numpy to List of the prediction
    Tests=clf.predict(X_test).tolist()
    print('HHHHHHHHHHHHHHHHHHHHH'+Tests)
    return Accuracy_test

@app.route("/api/task/<Name>", methods=['put'])
def update_task(Name):
    title = request.get_json()
    title=str(title)
    print(title)
    result = {"Aziz": "Aziz"}
    print(result)
    return  jsonify({'result' : result})

@app.route("/api/task/<id>", methods=['DELETE'])
def delete_task(id):
    if response > 0:
        result = {'message' : 'record deleted'}
    else:
        result = {'message' : 'no record found'}
    print(result)
    return  jsonify({'result' : result})

if __name__ == '__main__':
    app.run(debug=True)