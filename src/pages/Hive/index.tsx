
/**
 * 
 * @todo 
 * Figure out how to deal with lists
 */
const Hive = () => {
  return (
    <div className='flex flex-col gap-6 p-2'>
      <section className='flex flex-col gap-4 py-2 text-justify'>
        <h2 className="text-4xl">Introduction</h2>
        <p>
          <strong>Hive - The Study Hub</strong> is for fostering a thriving community of collaborative learners. We believe that education flourishes when students come together to share knowledge, support one another, and build lasting connections. With Hive, we aim to create a dynamic platform that prioritizes community building and accessibility, making it easier than ever for college and university students to connect, collaborate, and excel together in their academic pursuits. Whether it's mentoring juniors or seeking help from peers, Hive fosters a vibrant community dedicated to collective academic success and knowledge exchange.
        </p>

        <ol className="list-decimal list-outside ps-7">
          <li><strong>Accessibility and Convenience</strong>: Say goodbye to the hassle of juggling multiple platforms. With Hive, everything you need for your academic endeavors is conveniently accessible in one centralized platform. Stay organized, connected, and focused on your studies with ease.</li>
          <li><strong>Community Building</strong>: At the heart of Hive is a vibrant community of learners united by a passion for knowledge and growth. Connect with like-minded students, build meaningful relationships, and foster a supportive learning environment where everyone can thrive.</li>
          <li><strong>Customizable Study Groups</strong>: Dive into a diverse array of study groups tailored to your courses and subjects. From biology to literature, create dedicated spaces for focused discussions and collaborative learning experiences.</li>
          <li><strong>Dedicated Channels</strong>: Stay organized and engaged with dedicated channels for different topics, assignments, and study sessions within your study groups. Streamline communication and collaboration for maximum productivity.</li>
          <li><strong>Interactive Communication</strong>: Break down barriers with real-time group chat, voice, and video calls. Connect with your peers anytime, anywhere, and engage in lively discussions and study sessions</li>
          <li><strong>Collaborative Tools</strong>: Leverage powerful collaborative tools, including virtual whiteboards, document sharing, and screen sharing, to enhance group discussions and study sessions. Work together seamlessly to tackle challenging topics and assignments.</li>
          <li><strong>Peer-to-Peer Learning</strong>: Embrace the spirit of peer-to-peer learning by sharing your expertise and seeking guidance from fellow students. Build meaningful connections and support each other's academic journey.</li>
          <li><strong>Resource Sharing</strong>: Access a wealth of educational resources shared by your peers within study groups. From lecture notes to helpful links, tap into a rich repository of resources to enhance your learning experience.</li>
        </ol>
      </section>

      <section className='flex flex-col gap-4 py-2 text-justify'>
        <h2 className="text-4xl ">Literature Review</h2>
        <p>
          This review aims to analyze popular educational platforms including <strong>Discord</strong>, <strong>Chalkpad</strong>, and <strong>Microsoft Teams</strong>. We'll delve into their unique features and assess how effectively they foster collaboration and community-building among students. From Discord's communication flexibility to Chalkpad's classroom-oriented tools and Microsoft Teams' productivity integration, we'll evaluate their strengths and weaknesses. This examination offers valuable insights into the evolving educational technology landscape and the diverse options available for enhancing the learning journey.
        </p>
        <h3 className='text-2xl'>Discord</h3>
        <p>Highlights</p>
        <ul className="list-disc list-outside ps-7">
          <li>Versatile communication platform with text chat, voice chat, and video conferencing capabilities</li>
          <li>User-friendly interface for informal communication and social interaction.</li>
          <li>Widely adopted and familiar to many students and educators</li>
        </ul>
        <p>Limitation</p>
        <ul className="list-disc list-outside ps-7">
          <li>Lack of specialized features for academic purposes, such as dedicated study groups and collaborative tools.</li>
          <li>Limited suitability for structured academic collaboration and peer-to-peer learning.</li>
        </ul>
        <h3 className='text-2xl'>Chalkpad (And in extension -Brightspace)</h3>
        <p>Highlights</p>
        <ul className="list-disc list-outside ps-7">
          <li>Features for virtual classrooms, collaborative whiteboards, and assignment tracking</li>
          <li>Suitable for formal educational settings with predefined courses and assignments.</li>
          <li>Integration with existing learning management systems and educational platforms.</li>
        </ul>
        <p>Limitation</p>
        <ul className="list-disc list-outside ps-7">
          <li>Focus primarily on classroom management and teacher-led instruction, with less emphasis on peer-to-peer learning and informal study groups.</li>
          <li>May lack flexibility and spontaneity required for informal collaboration and community building among students.</li>
        </ul>
        <h3 className='text-2xl'>Mincrosoft Teams</h3>
        <p>Highlights</p>
        <ul className="list-disc list-outside ps-7">
          <li>Integration with Microsoft Office suite and other productivity tools.</li>
          <li>Features for virtual meetings, document sharing, and collaborative editing</li>
          <li>Suitable for both formal and informal collaboration among students and educators</li>
        </ul>
        <p>Limitation</p>
        <ul className="list-disc list-outside ps-7">
          <li>Complexity and learning curve associated with Microsoft Teams interface and functionality.</li>
          <li>May require additional licenses or subscriptions for full access to advanced features and functionalities.</li>
        </ul>
      </section>

      <section className='flex flex-col gap-4 py-2 text-justify'>
        <h2 className="text-4xl ">Objectives</h2>
        <p>Our primary objective is to address the limitations of existing educational platforms, including Discord, Chalkpad, and Microsoft Teams, by offering a single cohesive application tailored specifically for students. We aim to identify the shortcomings of these platforms, such as lack of specialized features for academic purposes and fragmentation of communication channels, and provide solutions that streamline the learning experience.</p>

        <p>
          Key Objectives Include:
        </p>

        <ol className='list-decimal list-outside ps-7'>
          <li><strong>Identifying Limitations</strong>: Analyze the weaknesses of competitors' applications to understand where they fall short in meeting the needs of students. This includes assessing issues related to usability, functionality, and suitability for academic purposes.</li>
          <li><strong>Addressing User Needs</strong>: Prioritize user feedback and incorporate it into the development process to ensure that our platform meets the evolving needs of students. By listening to our users, we aim to create a solution that truly enhances their learning experience.</li>
          <li><strong>Providing a Cohesive Experience</strong>: Develop a single, integrated platform that consolidates communication, collaboration, and resource sharing tools. This cohesive environment will eliminate the need for students to switch between multiple applications, resulting in a more efficient and focused study experience.</li>
          <li><strong>Continual Innovation</strong>: Recognizing the importance of ongoing improvement, we aim to continually gather user feedback and implement innovative features based on their needs and preferences. By staying responsive to user input, we expect our platform to evolve and remain valuable and relevant over time.</li>
        </ol>

        <p>In summary, we believe that by fixing the current issues with existing platforms and adding new, exciting features, we can completely transform the way students study. Our goal is to make the learning experience smoother and more enjoyable for college students everywhere.</p>

        <p>We're not just aiming to solve immediate problems – we want to create something bigger. By building stronger communities, we're hoping to encourage students to work together, share ideas, and support each other. At the same time, we're focused on making the platform easy to use and enjoyable, so students can focus on their studies without any distractions. Ultimately, we're confident that these changes will lead to more engagement from students, making learning a more exciting and rewarding experience for everyone involved.</p>
      </section>

    </div>
  )
};

export default Hive;