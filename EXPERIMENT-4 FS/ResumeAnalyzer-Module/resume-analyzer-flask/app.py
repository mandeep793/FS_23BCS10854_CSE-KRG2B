from flask import Flask, request, jsonify
from utils import parse_resume, match_resume_with_jd

app = Flask(__name__)

@app.route("/analyze", methods=["POST"])
def analyze_resume():
    resume_file = request.files['resume']
    job_description = request.form['job_description']
    resume_text = parse_resume(resume_file)
    match_score, missing_skills = match_resume_with_jd(resume_text, job_description)
    return jsonify({
        "matchScore": match_score,
        "missingSkills": missing_skills,
        "resumeText": resume_text
    })

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
