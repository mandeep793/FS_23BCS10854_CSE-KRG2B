import docx2txt
import PyPDF2
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity

def parse_resume(file):
    if file.filename.endswith('.pdf'):
        reader = PyPDF2.PdfReader(file)
        text = ""
        for page in reader.pages:
            text += page.extract_text()
        return text
    elif file.filename.endswith('.docx'):
        return docx2txt.process(file)
    return ""

def match_resume_with_jd(resume_text, job_description):
    vectorizer = TfidfVectorizer()
    vectors = vectorizer.fit_transform([resume_text, job_description])
    score = cosine_similarity(vectors[0:1], vectors[1:2])[0][0]*100
    resume_words = set(resume_text.lower().split())
    jd_words = set(job_description.lower().split())
    missing_skills = list(jd_words - resume_words)
    return round(score, 2), missing_skills
