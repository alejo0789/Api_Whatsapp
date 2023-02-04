import openpyxl

# Create a new Excel file
workbook = openpyxl.Workbook()

# Create a new sheet
sheet = workbook.active

# Write data to the sheet
sheet['A1'] = 'Name'
sheet['B1'] = 'Age'
sheet['A2'] = 'John Doe'
sheet['B2'] = 30

# Save the file
workbook.save('data.xlsx')