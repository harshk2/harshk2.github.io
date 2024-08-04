import json
import re
import PyPDF2
import docx

def parse_resume(file_path):
    if file_path.endswith('.pdf'):
        #PDF file
        pdf_file = open(file_path, 'rb')
        pdf_reader = PyPDF2.PdfFileReader(pdf_file)
        text = ''
        for page in range(pdf_reader.numPages):
            text += pdf_reader.getPage(page).extractText()
        pdf_file.close()
    elif file_path.endswith('.docx'):
        #DOCX file
        doc = docx.Document(file_path)
        text = ''
        for para in doc.paragraphs:
            text += para.text
    else:
        print("Unsupported file format. Please use PDF or DOCX.")
        return None

    data = {}

    #contact information
    contact_info = re.search(r'Contact Information:\s*(.*)', text)
    if contact_info:
        data['contact_info'] = contact_info.group(1).strip()

    # education
    education = re.search(r'Education:\s*(.*)', text)
    if education:
        data['education'] = education.group(1).strip()

    #work experience
    work_experience = re.search(r'Work Experience:\s*(.*)', text)
    if work_experience:
        data['work_experience'] = work_experience.group(1).strip()

    # skillset
    skills = re.search(r'Skills:\s*(.*)', text)
    if skills:
        data['skills'] = skills.group(1).strip()

    # awards
    awards = re.search(r'Awards:\s*(.*)', text)
    if awards:
        data['awards'] = awards.group(1).strip()

    # certifications
    certifications = re.search(r'Certifications:\s*(.*)', text)
    if certifications:
        data['certifications'] = certifications.group(1).strip()

    # Convert the data to JSON
    json_data = json.dumps(data, indent=4)

    return json_data

# Example usage
resume_text = """
Note:-----> Just a generlized text how it should it will look.
Contact Information:
Harshawardhan Kardile
VIIT, Pune.
8087075717
harshwardhankardile1990@gmail.com

Education:
Bachelor of Science in E&TC
 Vishwakarma Institute of Information and Technology

Work Experience:
Software Engineer, ABC Company (2020-2024)
- Developed multiple web applications using Python and Django
- Collaborated with cross-functional teams to deliver projects on time

Skills:
- Python
- Django
- JavaScript
- HTML/CSS

Awards:
- Winner of the University Hackathon (2021)
- Recipient of the ABC Company Innovation Award (2023)

Certifications:
- Tata Data Visualisation: Empowering Business with Effective Insights Job Simulation on 
  Forage - July 2024
- HTML, CSS, and JavaScript for Web Developers by John Hopkins University.
- Data structures and Algorithms.
"""

file_path = 'resume.pdf' #note: ----> we can put resume link here 
json_data = parse_resume(file_path)
print(json_data)
