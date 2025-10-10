import React from 'react';

/**
 * About component - Core Beliefs section
 */
const About = () => {
  const beliefs = [
    {
      title: "Scripture",
      content: "We believe that the Bible, both Old and New Testament, is the Word of God, fully inspired, without mistake as originally written, and our final authority for faith and practice in the Christian life. (2 Tim. 3:16; Pet. 2:20-21; Ps. 119:160)"
    },
    {
      title: "God",
      content: "We believe in one God who eternally exists in three distinct Persons—Father, Son, and Holy Spirit—who are eternally coequal in power and worth. (Matt. 28:19-20; 1 Pet. 1:2; 2 Cor. 13:14)"
    },
    {
      title: "Humanity",
      content: "We believe that mankind was created in God's image and had perfect relationship with God but as a result of disobedience suffered spiritual separation from God and physical death. We believe that all people are sinners by birth, nature, and choice and therefore separated from their Creator. (Gen. 1:27; Ps. 8; Isa. 59:1-2; Rom. 3:9-23)"
    },
    {
      title: "Jesus Christ",
      content: "We believe that Jesus Christ is God, was born of a virgin, lived a sinless life, died a substitutionary death on a cross, was raised from the dead three days later, and ascended to the right hand of the Father in Heaven. (Jn. 1:1-5; Matt. 1:22-23; Heb. 4:14-15; Rom. 1:3-4; 1 Cor. 15:3-4)"
    },
    {
      title: "Salvation",
      content: "We believe that by God's grace, a person can be in right relationship with God by trusting in the Person and work of Jesus Christ by faith alone, apart from any kind of work. (Rom. 5:1; 6:23; Eph. 2:8-9; Titus 3:5)"
    },
    {
      title: "Holy Spirit",
      content: "We believe that the Holy Spirit is God and equal with both the Father and the Son. He regenerates all Christians, is indwelling all believers, enabling them to live the Christian life, and empowering them for service. (2 Cor. 3:17; John 16:7-13; 1 Cor. 2:12; 3:16; Eph. 1:13)"
    },
    {
      title: "Christ's Return",
      content: "We believe in the imminent personal return of Jesus Christ to earth. (Titus 2:13; Matt. 25:31-34; 1 Thess. 5:1-11)"
    },
    {
      title: "Resurrection",
      content: "We believe in the bodily resurrection of all mankind. Those who are in relationship with God through Jesus Christ will be resurrected to eternal life, but those without a relationship with Jesus Christ will be resurrected to eternal judgment. (1 Cor. 15:22-26, 40-44, 50-58; John 3:36; Rev. 20:11-15)"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      {/* Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl lg:text-5xl font-bold text-text-primary mb-4">
          Our Core Beliefs
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-gold-500 rounded-full mx-auto mb-6"></div>
        <p className="text-lg text-text-secondary max-w-3xl mx-auto">
          Grace Gospel Church is committed to historic, orthodox Christianity. Here are the foundational beliefs that guide our faith and practice.
        </p>
      </div>

      {/* Beliefs Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {beliefs.map((belief, index) => (
          <div 
            key={index}
            className="bg-warmWhite rounded-xl p-6 shadow-soft border border-gold-200/30 hover:shadow-soft-lg transition-shadow"
          >
            <h3 className="text-xl font-bold text-primary-600 mb-3">
              {belief.title}
            </h3>
            <p className="text-text-secondary leading-relaxed">
              {belief.content}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
