**Print all even numbers between 0 and 100 (includes 100):**

```python
for i in range(101):
		if i % 2 == 0:
      	print(i)
```



**What is the output of `print("%.02f" % 1.2345)`**

`1.23`



**Exchange values of two variables in Python:**

1. ```
   a, b = b, a
   ```

2. ```python
   temp = a
   b = a
   a = temp
   ```



**In Pandas, how can you sort an index of a table in dscending order? (Assuming you have loaded the table as `data` )**

```python
data.sort_index(ascending=False)
```



**How can you remove dulipcated numbers in a list?**

1. using `set`:

   ```python
   my_list = [1,2,3,3,4,4,5,6]
   
   def remove_duplicates(my_list):   
       my_set = set[my_list]
       return list(my_set) 
   ```

2. Direct iteration

   ```python
   def remove_duplicates(my_list):
     	temp_list = []
       for i in my_list:
       		if i not in temp_list:
             	temp_list.append(i)
       return temp_list
   ```

3. using `unique` in pandas

   ```python
   def remove_duplicates(my_list):
     	import pandas as pd
       return pd.unique(my_list).tolist()
   ```

   
