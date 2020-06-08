import pandas as pd
import numpy as np
import scipy.stats

#reading data from CSV file
df=pd.read_csv("BSE_DATA_Covid_converted.csv",sep=",",header=None) #reading the CSV file
close_dict=np.array(df[4][61:])
infect_dict=np.array(df[7][61:])

close_bse=[]
infect=[]

#converting data into integer.
for num in close_dict:
    close_bse.append(float(num))

for num in infect_dict:
    infect.append(int(num))

#results
print("Pearsons coefficients b/w infection and closing of bse SENSEX:")
print("Alpha:",scipy.stats.pearsonr(close_bse,infect)[0])
print("p-value:",scipy.stats.pearsonr(close_bse,infect)[1])
