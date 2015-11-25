
def checkRegistry(line)
registryHives = ["HKEY_CURRENT_USER","HKEY_CLASSES_ROOT","HKEY_LOCAL_MACHINE"]

registryHives.each do | hive |
if line =~ /#{hive}/
	puts "[+] Registry Access to Hive : #{hive}"
end
end
end