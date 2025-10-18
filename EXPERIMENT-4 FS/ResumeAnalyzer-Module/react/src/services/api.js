// Placeholder for API calls if needed later
export const analyzeResume = async (formData) => {
  try {
    const response = await fetch("http://localhost:8080/api/resume/analyze", {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      throw new Error("Failed to analyze resume");
    }

    return await response.json();
  } catch (error) {
    console.error("Error:", error);
    return { score: 0, missing_skills: ["Error connecting to backend"] };
  }
};
