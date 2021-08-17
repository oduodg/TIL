""" 
url = "http://youtube.com"
rule1 = url[7:]
rule2 = rule1[:-4]
rule3 = rule2[:3]

print(rule3 + str(len(rule2))+ str(rule2.count("e")) + "!") 
"""

url = "http://youtube.com"
my_str = url.replace("http://", "")
my_str = my_str[:my_str.index(".")]
print(my_str[:3] + str(len(my_str)) + str(my_str.count('e')) + "!")