const constants = {
    hotline: "+1 (646) 683-4612",
    mail: "rhconusa@gmail.com",
    facebook: "https://www.facebook.com/RHconstructionusa",
    twitter: "https://twitter.com/_rhconstruction",
  };
  export default constants;
  export const constructionProjectConsiderations = [
    "Reputation and Experience: Begin by researching the contractor's reputation and experience in the industry. Look for reviews, testimonials, and examples of past projects. A seasoned contractor with a positive track record is more likely to deliver quality results.",
    "Specialization and Expertise: Assess whether the contractor specializes in the type of work you need. A specialist will likely have more in-depth knowledge and skills in a specific area, leading to better outcomes for your project.",
    "Communication and Transparency: Effective communication is key to any successful project. Ensure the contractor is transparent about timelines, costs, and potential challenges. Regular updates and clear channels of communication will help prevent misunderstandings.",
    "Contract Terms and Conditions: Carefully review the contract terms and conditions. Ensure it includes all relevant details such as scope of work, timelines, payment schedules, and any warranties. A well-drafted contract protects both parties and sets clear expectations.",
    "Availability and Workforce: Check the contractor's availability and the size of their workforce. Confirm that they can dedicate sufficient time to your project and have the necessary manpower to complete it efficiently.",
    "Safety Practices: Prioritize contractors who prioritize safety. A commitment to safety reduces the risk of accidents on the job site.",
    // "Incorporating modern technologies and innovative solutions to enhance efficiency and productivity.",
    // "Creating a realistic timeline and scheduling plan for the various phases of the construction project.",
    // "Developing a strategy for the procurement of materials and allocation of resources.",
    // "Establishing effective communication channels among team members, stakeholders, and other involved parties.",
    // "Implementing measures to ensure the quality and integrity of construction work throughout the project.",
    // "Conducting an assessment of the project's environmental impact and implementing eco-friendly practices.",
    // "Engaging with the local community and stakeholders to address concerns and build positive relationships.",
    // "Securing appropriate insurance coverage and addressing legal considerations to protect the project and parties involved.",
    // "Developing comprehensive safety plans and protocols to ensure the well-being of workers and minimize accidents.",
    // "Planning for the ongoing maintenance and operational aspects of the constructed facility.",
    // "Creating a flexible plan that can adapt to unexpected changes in conditions or requirements.",
    // "Establishing a collaborative relationship with the client and managing expectations throughout the construction process.",
    // "Exploring and implementing innovative construction methods to enhance efficiency and reduce costs.",
    // "Establishing a robust system for record-keeping and documentation to track progress and ensure accountability.",
  ];
  const totalLength = constructionProjectConsiderations?.length;
  const partLength = Math.ceil(totalLength / 5);
  const part1 = constructionProjectConsiderations.slice(0, partLength);
  const part2 = constructionProjectConsiderations.slice(
    partLength,
    2 * partLength
  );
  const part3 = constructionProjectConsiderations.slice(
    2 * partLength,
    3 * partLength
  );
  const part4 = constructionProjectConsiderations.slice(
    3 * partLength,
    4 * partLength
  );
  const part5 = constructionProjectConsiderations.slice(4 * partLength);
  export const partOfconstructionProjectConsiderations = [
    {
      part: {
        data: part1,
        length: part1.length,
      },
    },
    {
      part: {
        data: part2,
        length: part2.length,
      },
    },
    {
      part: {
        data: part3,
        length: part3.length,
      },
    },
    {
      part: {
        data: part4,
        length: part4.length,
      },
    },
    {
      part: {
        data: part5,
        length: part5.length,
      },
    },
  ];
  