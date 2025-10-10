import React from 'react';
import { PageLayout, Section } from './layout';
import { Footer } from './index';
import { emilylogan, jakenikki, peytonmykah, jesse, ggcmembers } from '../assets';

const Team = () => {
  const teamMembers = [
    {
      names: "Logan & Emily Tinnel",
      image: emilylogan,
      description: "Logan is the Planter and Lead Elder at GGC. Emily coordinates the Children's Ministry.",
    },
    {
      names: "Jake & Nikki Tyler",
      image: jakenikki,
      description: "Jake and Nikki both serve on the Worship Team. Jake is currently in Eldership training and Nikki serves in Children's Ministry.",
    },
    {
      names: "Peyton & Mykah Ballard",
      image: peytonmykah,
      description: "Peyton serves as the finance chair and in church administration and Mykah serves in the Women's Ministry.",
    },
    {
      names: "Jesse Borrell",
      image: jesse,
      description: "Jesse serves as a Community Group leader and on the Worship Team.",
    },
    {
      names: "Members",
      image: ggcmembers,
      description: "There are many other members and regular attenders of GGC who serve on our ministry teams.",
    }
  ];

  return (
    <PageLayout>
      <Section className="bg-gradient-to-br from-warmWhite via-lightCream to-cream py-20">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-text-primary mb-4">
              Meet Our Team
            </h1>
            <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-gold-500 rounded-full mx-auto mb-6"></div>
            <p className="text-lg text-text-secondary max-w-3xl mx-auto">
              Get to know the dedicated individuals who serve and lead at Grace Gospel Church.
            </p>
          </div>

          {/* Team Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-warmWhite rounded-xl overflow-hidden shadow-soft border border-gold-200/30 hover:shadow-soft-lg transition-all group"
              >
                {/* Image Container (bigger box, no cropping) */}
                <div className="relative h-[22rem] md:h-[26rem] lg:h-[28rem] bg-white overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.names}
                    className="absolute inset-0 w-full h-full object-contain transition-transform duration-300"
                    style={{
                      transform: 'none',            // no pre-zoom
                      objectPosition: '100% 50%'     // centered
                    }}
                    onError={(e) => { e.target.style.display = 'none'; }}
                  />
                </div>
                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-primary-600 mb-3">
                    {member.names}
                  </h3>
                  <p className="text-text-secondary leading-relaxed">
                    {member.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>
      <Footer />
    </PageLayout>
  );
};

export default Team;
