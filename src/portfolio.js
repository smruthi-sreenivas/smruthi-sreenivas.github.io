const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://smruthi-sreenivas.github.io/',
  title: 'JS.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Smruthi S',
  role: 'Computer Vision Engineer',
  description:
    'I am a Dynamic Computer Vision Engineer with a strong background in developing advanced Deep Learning models and image processing techniques. I specialize in using PyTorch and OpenCV, with a proven track record of achieving high accuracy in competitive settings.',
  resume: 'https://drive.google.com/file/d/1KwMAtTyqNTAOefditUECxWdF0enhOL-H/view?usp=drive_link',
  social: {
    linkedin: 'https://www.linkedin.com/in/smruthisreenivas',
    github: 'https://github.com/smruthi-sreenivas',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Kenyan Food Classifier',
    description:
      'Classify image into any one of the 13 Kenyan food classes.',
    stack: ['Image Classification', 'Deep Learning', 'PyTorch', 'OpenCV'],
    sourceCode: 'https://github.com/smruthi-sreenivas/Kenyan_food_classifier',
    livePreview: 'https://github.com/smruthi-sreenivas/Kenyan_food_classifier',
  },
  {
    name: 'Aerial Drone Segmentation',
    description:
      'Aerial Drone Segmentation for Precise Landscape Analysis',
    stack: ['Image Segmentation', 'Deep Learning', 'PyTorch', 'OpenCV'],
    sourceCode: 'https://github.com/smruthi-sreenivas/Kenyan_food_classifier',
    livePreview: 'https://github.com',
  },
  {
    name: 'Object Detection and Tracking',
    description:
      'Detect and track a sports ball in a video',
    stack: ['Object Detection', 'Object Tracking', 'OpenCV', 'Python'],
    sourceCode: 'https://github.com/smruthi-sreenivas/Detection-and-Tracking',
    livePreview: 'https://github.com/smruthi-sreenivas/Detection-and-Tracking',
  },
  {
    name: 'Sunglass Filter',
    description:
      'Virtual sunglass effect to real-time webcam footage using OpenCV and Python.',
    stack: ['Image Processing', 'Python', 'OpenCV'],
    sourceCode: 'https://github.com/smruthi-sreenivas/Sunglasses-Filter',
    livePreview: 'https://github.com/smruthi-sreenivas/Sunglasses-Filter',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'Computer Vision',
  'Deep Learning',
  'Image Classification',
  'Object Detection',
  'Image Segmentation',
  'Obect Tracking',
  'Image Processing',
  'OpenCV',
  'PyTorch',
  'Python',

]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'smruthi.kukku.s@mail.com',
}

export { header, about, projects, skills, contact }
