# 🏆 AIM MedVisor: AI-Driven MRI Analysis for Spinal Health  

## 📌 Project Overview  
AIM MedVisor is an AI-powered medical tool designed to **streamline the diagnosis of spinal abnormalities** through advanced MRI analysis. By leveraging deep learning, MedVisor reduces barriers to diagnosis, making spinal health assessments more efficient and accessible.  

## 🏅 1st Place Recognition  
Our work earned **1st place** in a **competitive evaluation** judged by **industry professionals and academic experts**, recognizing its contribution to **advancing medical image analysis**.  

## 🎯 Problem Statement  
The path from identifying symptoms like **"my back hurts"** to diagnosing conditions such as **intervertebral disc degeneration** is complex and time-consuming. Current spinal assessment practices, which analyze MRI scans per vertebra, are hindered by **manual processes and a steep learning curve**.  

## 💡 Solution  
AIM MedVisor introduces a **two-model AI system** to address these challenges:  

1. **Segmentation Model** 🧩  
   - Processes full spine MRI scans to **identify individual vertebrae and discs**.  
   - Uses a **UNet architecture** trained for precise segmentation.  
   - Utilizes **OpenCV** to generate **bounding boxes** for targeted analysis.  

2. **Classification Model** 🏷️  
   - Classifies individual vertebrae to **detect and grade disk deviations** based on medical grading systems (e.g., **Pfirrmann, Modic**).  
   - Powered by a **ResNet50 deep learning model** to ensure **high accuracy** in diagnoses.  

## 🚀 Key Features  
- **Dual-Model Architecture**: Enhances the accuracy of segmentation & classification tasks.  
- **Industry-Relevant Tech Stack**:  
  - **Model Development**: TensorFlow, PyTorch, Keras, SimpleITK, OpenCV  
  - **Application**: React (Chakra UI), Python (Flask)  
- **Scalability & Future Capabilities**: Supports **symptom progression prediction** & a **user-friendly interface** for non-professionals.  

## 🔬 How It Works  
1️⃣ **Input**: Full spine MRI scan.  
2️⃣ **Step 1**: **Segmentation Model** isolates vertebrae and discs (UNet + OpenCV).  
3️⃣ **Step 2**: **Classification Model** grades and diagnoses detected abnormalities (ResNet50).  

## 🎯 Impact & Industry Validation  
MedVisor **streamlines the diagnostic process**, enabling:  
✅ **Early detection of spinal conditions** for better treatment outcomes.  
✅ **Faster and more precise assessments** for healthcare professionals.  
✅ **Bridging AI with real-world medical applications** to improve patient care.  

## 🛠️ Getting Started  

### 🔹 Prerequisites  
- Python **3.8+**  
- Node.js **16+**  
- TensorFlow & PyTorch installed  

### 🔹 Installation  

#### **1️⃣ Clone the Repository**  
```bash
git clone https://github.com/YourUsername/AIM-MedVisor.git
cd AIM-MedVisor
```
#### **2️⃣ Set Up the Backend**
```bash
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt
python app.py
```
#### **3️⃣ Set Up the Frontend**
```bash
npm install
npm start
```

