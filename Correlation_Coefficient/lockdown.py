import pandas as pd
import numpy as np
import scipy.stats

#reading data from CSV file
df=pd.read_csv("BSE_DATA_Covid_converted.csv",sep=",",header=None) #reading the CSV file
close_list=np.array(df[4][37:60])
infect_list=np.array(df[7][37:60])
death_list=np.array(df[9][37:60])

close_bse=[]
infect=[]
death=[]

#converting data into integer.
for num in close_list:
    close_bse.append(float(num))

for num in infect_list:
    infect.append(int(num))

for num in death_list:
    death.append(int(num))

#results
print("Pearsons coefficients b/w infection and closing of bse SENSEX:")
print("Alpha:",scipy.stats.pearsonr(close_bse,infect)[0])
print("p-value:",scipy.stats.pearsonr(close_bse,infect)[1])
print("")
print("Pearsons coefficients b/w death and closing of bse SENSEX:")
print("Alpha:",scipy.stats.pearsonr(close_bse,death)[0])
print("p-value:",scipy.stats.pearsonr(close_bse,death)[1])
