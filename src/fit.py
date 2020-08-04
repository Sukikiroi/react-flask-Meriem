import csv    
myCsvRow=str(1)','str(2)',2,'str(3)','str(4)','str(5)','str(6)',,,'
with open('predict.csv','a') as fd:
  fd.write("\n"+myCsvRow)