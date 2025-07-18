import React, { useState } from 'react';
import styled from 'styled-components';

interface JobPosition {
  id: string;
  title: string;
  restaurant: string;
  type: 'Full-time' | 'Part-time' | 'Seasonal';
  location: string;
  department: string;
  experience: string;
  description: string;
  requirements: string[];
  benefits: string[];
  isOpen: boolean;
}

const JoinTeamContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #f8f6f3 0%, #fdfbf7 100%);
  padding: 100px 1.5rem 3rem;
  
  @media (max-width: 768px) {
    padding: 80px 1rem 1.5rem;
  }
`;

const JoinTeamContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const HeroSection = styled.div`
  text-align: center;
  margin-bottom: 4rem;
  
  h1 {
    font-family: ${({ theme }) => theme.fonts.heading};
    font-size: 3.5rem;
    font-weight: 700;
    color: #8B4513;
    margin-bottom: 1rem;
    
    @media (max-width: 768px) {
      font-size: 2.5rem;
    }
  }
  
  .subtitle {
    font-size: 1.25rem;
    color: #666;
    max-width: 600px;
    margin: 0 auto 2rem;
    line-height: 1.6;
  }
`;

const CultureSection = styled.div`
  background: white;
  padding: 3rem;
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  margin-bottom: 4rem;
  
  @media (max-width: 768px) {
    padding: 2rem 1.5rem;
  }
  
  h2 {
    font-family: ${({ theme }) => theme.fonts.heading};
    font-size: 2.5rem;
    font-weight: 600;
    color: #8B4513;
    margin-bottom: 1.5rem;
    text-align: center;
    
    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }
  
  p {
    font-size: 1.1rem;
    color: #555;
    line-height: 1.7;
    margin-bottom: 1.5rem;
    text-align: justify;
    
    &:last-child {
      margin-bottom: 0;
    }
  }
`;

const BenefitsSection = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
`;

const BenefitCard = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-4px);
  }
  
  .icon {
    font-size: 3rem;
    margin-bottom: 1rem;
  }
  
  h3 {
    font-family: ${({ theme }) => theme.fonts.heading};
    font-size: 1.5rem;
    font-weight: 600;
    color: #8B4513;
    margin-bottom: 1rem;
  }
  
  p {
    color: #666;
    line-height: 1.6;
  }
`;

const JobsSection = styled.div`
  h2 {
    font-family: ${({ theme }) => theme.fonts.heading};
    font-size: 2.5rem;
    font-weight: 600;
    color: #8B4513;
    margin-bottom: 2rem;
    text-align: center;
    
    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }
`;

const FilterSection = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
  justify-content: center;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const FilterButton = styled.button<{ $active: boolean }>`
  padding: 0.75rem 1.5rem;
  border: 2px solid ${({ $active }) => $active ? '#8B4513' : '#e0e0e0'};
  background: ${({ $active }) => $active ? '#8B4513' : 'white'};
  color: ${({ $active }) => $active ? 'white' : '#8B4513'};
  border-radius: 25px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: #8B4513;
    color: white;
    border-color: #8B4513;
  }
`;

const JobCard = styled.div`
  background: white;
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  margin-bottom: 1.5rem;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-4px);
  }
`;

const JobHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

const JobTitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 1.5rem;
  font-weight: 600;
  color: #8B4513;
  margin-bottom: 0.5rem;
`;

const JobMeta = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  margin-bottom: 1rem;
`;

const JobTag = styled.span`
  background: #f0f0f0;
  color: #8B4513;
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;
`;

const JobDescription = styled.p`
  color: #666;
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const JobRequirements = styled.div`
  margin-bottom: 1.5rem;
  
  h4 {
    font-weight: 600;
    color: #8B4513;
    margin-bottom: 0.5rem;
  }
  
  ul {
    list-style: none;
    padding: 0;
  }
  
  li {
    color: #666;
    margin-bottom: 0.25rem;
    padding-left: 1rem;
    position: relative;
    
    &:before {
      content: '•';
      color: #8B4513;
      position: absolute;
      left: 0;
    }
  }
`;

const ApplyButton = styled.button`
  background: linear-gradient(135deg, #8B4513, #A0522D);
  color: white;
  border: none;
  padding: 0.875rem 2rem;
  border-radius: 6px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: linear-gradient(135deg, #A0522D, #CD853F);
    transform: translateY(-1px);
    box-shadow: 0 3px 8px rgba(139, 69, 19, 0.3);
  }
  
  &:active {
    transform: translateY(0);
  }
`;

const NoJobsMessage = styled.div`
  text-align: center;
  padding: 3rem;
  background: white;
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  
  h3 {
    font-family: ${({ theme }) => theme.fonts.heading};
    font-size: 1.5rem;
    color: #8B4513;
    margin-bottom: 1rem;
  }
  
  p {
    color: #666;
    line-height: 1.6;
  }
`;

const ApplicationSection = styled.div`
  background: white;
  padding: 3rem;
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  margin-top: 4rem;
  
  @media (max-width: 768px) {
    padding: 2rem 1.5rem;
  }
  
  h2 {
    font-family: ${({ theme }) => theme.fonts.heading};
    font-size: 2.5rem;
    font-weight: 600;
    color: #8B4513;
    margin-bottom: 1.5rem;
    text-align: center;
    
    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }
  
  p {
    font-size: 1.1rem;
    color: #555;
    line-height: 1.7;
    margin-bottom: 1.5rem;
    text-align: center;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const ContactItem = styled.div`
  text-align: center;
  
  h4 {
    font-weight: 600;
    color: #8B4513;
    margin-bottom: 0.5rem;
  }
  
  p {
    color: #666;
    margin: 0;
  }
`;

const jobPositions: JobPosition[] = [
  {
    id: 'chef-fabrica',
    title: 'Head Chef',
    restaurant: 'Fabrica',
    type: 'Full-time',
    location: 'Yerevan',
    department: 'Kitchen',
    experience: '5+ years',
    description: 'We are looking for a creative and experienced Head Chef to lead our kitchen team at Fabrica. You will be responsible for menu development, kitchen operations, and maintaining our high culinary standards.',
    requirements: [
      'Minimum 5 years of experience in fine dining',
      'Strong leadership and team management skills',
      'Creative menu development abilities',
      'Knowledge of modern brunch and coffee culture',
      'Excellent organizational skills'
    ],
    benefits: [
      'Competitive salary',
      'Health insurance',
      'Professional development opportunities',
      'Employee meals',
      'Flexible scheduling'
    ],
    isOpen: true
  },
  {
    id: 'server-zanzibar',
    title: 'Experienced Server',
    restaurant: 'Zanzibar',
    type: 'Full-time',
    location: 'Yerevan',
    department: 'Service',
    experience: '2+ years',
    description: 'Join our vibrant team at Zanzibar as an experienced server. You will be part of creating unforgettable dining experiences in our tropical paradise setting.',
    requirements: [
      'Minimum 2 years of serving experience',
      'Knowledge of cocktails and spirits',
      'Excellent customer service skills',
      'Ability to work in a fast-paced environment',
      'Team player attitude'
    ],
    benefits: [
      'Competitive salary + tips',
      'Health insurance',
      'Employee discount',
      'Training opportunities',
      'Fun work environment'
    ],
    isOpen: true
  },
  {
    id: 'bartender-eltorro',
    title: 'Mixologist',
    restaurant: 'El Torro',
    type: 'Full-time',
    location: 'Yerevan',
    department: 'Bar',
    experience: '3+ years',
    description: 'We are seeking a talented mixologist to join our bar team at El Torro. You will create innovative cocktails and provide exceptional service to our guests.',
    requirements: [
      'Minimum 3 years of bartending experience',
      'Knowledge of Spanish wines and spirits',
      'Creative cocktail development skills',
      'Excellent presentation abilities',
      'Strong knowledge of wine pairings'
    ],
    benefits: [
      'Competitive salary + tips',
      'Health insurance',
      'Wine and spirits training',
      'Employee discount',
      'Career growth opportunities'
    ],
    isOpen: true
  },
  {
    id: 'manager-babylon',
    title: 'Restaurant Manager',
    restaurant: 'Babylon',
    type: 'Full-time',
    location: 'Yerevan',
    department: 'Management',
    experience: '4+ years',
    description: 'We are looking for an experienced Restaurant Manager to oversee operations at Babylon. You will ensure exceptional guest experiences and efficient restaurant operations.',
    requirements: [
      'Minimum 4 years of restaurant management experience',
      'Strong leadership and communication skills',
      'Financial management abilities',
      'Knowledge of Middle Eastern cuisine and culture',
      'Problem-solving and decision-making skills'
    ],
    benefits: [
      'Competitive salary',
      'Health insurance',
      'Performance bonuses',
      'Professional development',
      'Employee benefits package'
    ],
    isOpen: true
  },
  {
    id: 'sous-chef-antar',
    title: 'Sous Chef',
    restaurant: 'Antar',
    type: 'Full-time',
    location: 'Yerevan',
    department: 'Kitchen',
    experience: '3+ years',
    description: 'Join our culinary team at Antar as a Sous Chef. You will work closely with the Head Chef to create innovative Nordic-inspired dishes and maintain kitchen excellence.',
    requirements: [
      'Minimum 3 years of kitchen experience',
      'Knowledge of Nordic cuisine and techniques',
      'Strong organizational skills',
      'Ability to work under pressure',
      'Team leadership experience'
    ],
    benefits: [
      'Competitive salary',
      'Health insurance',
      'Culinary training opportunities',
      'Employee meals',
      'Creative freedom'
    ],
    isOpen: true
  }
];

export default function JoinOurTeamPage() {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const [selectedRestaurant, setSelectedRestaurant] = useState<string>('all');

  const restaurants = ['Fabrica', 'Zanzibar', 'El Torro', 'Babylon', 'Antar'];
  const departments = ['Kitchen', 'Service', 'Bar', 'Management'];

  const filteredJobs = jobPositions.filter(job => {
    const matchesFilter = selectedFilter === 'all' || job.department === selectedFilter;
    const matchesRestaurant = selectedRestaurant === 'all' || job.restaurant === selectedRestaurant;
    return matchesFilter && matchesRestaurant && job.isOpen;
  });

  const handleApply = (jobId: string) => {
    // In a real application, this would open an application form or redirect to an application page
    console.log(`Applying for job: ${jobId}`);
    alert('Thank you for your interest! Please send your resume to careers@fabricagroup.am with the job title in the subject line.');
  };

  return (
    <JoinTeamContainer>
      <JoinTeamContent>
        <HeroSection>
          <h1>Join Our Team</h1>
          <p className="subtitle">
            Be part of something extraordinary. Join the Fabrica Group family and help us create 
            unforgettable dining experiences across our five unique restaurants in Yerevan.
          </p>
        </HeroSection>

        <CultureSection>
          <h2>Our Culture</h2>
          <p>
            At Fabrica Group, we believe that our people are our greatest asset. We foster a culture 
            of creativity, collaboration, and continuous learning. Our team members are passionate 
            about hospitality and committed to delivering exceptional experiences to every guest.
          </p>
          <p>
            We value diversity, innovation, and personal growth. Whether you're starting your career 
            in hospitality or you're an experienced professional, we provide opportunities for 
            advancement and skill development in a supportive and dynamic environment.
          </p>
        </CultureSection>

        <BenefitsSection>
          <BenefitCard>
            <div className="icon">🌟</div>
            <h3>Growth Opportunities</h3>
            <p>
              Continuous learning and career advancement opportunities across our five restaurants. 
              We invest in our team's professional development.
            </p>
          </BenefitCard>
          <BenefitCard>
            <div className="icon">💝</div>
            <h3>Competitive Benefits</h3>
            <p>
              Comprehensive health insurance, competitive salaries, employee discounts, and 
              performance-based bonuses for our valued team members.
            </p>
          </BenefitCard>
          <BenefitCard>
            <div className="icon">🤝</div>
            <h3>Supportive Environment</h3>
            <p>
              A collaborative and inclusive work environment where every team member's contribution 
              is valued and recognized.
            </p>
          </BenefitCard>
        </BenefitsSection>

        <JobsSection>
          <h2>Current Openings</h2>
          
          <FilterSection>
            <FilterButton 
              $active={selectedRestaurant === 'all'}
              onClick={() => setSelectedRestaurant('all')}
            >
              All Restaurants
            </FilterButton>
            {restaurants.map(restaurant => (
              <FilterButton 
                key={restaurant}
                $active={selectedRestaurant === restaurant}
                onClick={() => setSelectedRestaurant(restaurant)}
              >
                {restaurant}
              </FilterButton>
            ))}
          </FilterSection>

          <FilterSection>
            <FilterButton 
              $active={selectedFilter === 'all'}
              onClick={() => setSelectedFilter('all')}
            >
              All Departments
            </FilterButton>
            {departments.map(department => (
              <FilterButton 
                key={department}
                $active={selectedFilter === department}
                onClick={() => setSelectedFilter(department)}
              >
                {department}
              </FilterButton>
            ))}
          </FilterSection>

          {filteredJobs.length > 0 ? (
            filteredJobs.map(job => (
              <JobCard key={job.id}>
                <JobHeader>
                  <div>
                    <JobTitle>{job.title}</JobTitle>
                    <JobMeta>
                      <JobTag>{job.restaurant}</JobTag>
                      <JobTag>{job.type}</JobTag>
                      <JobTag>{job.department}</JobTag>
                      <JobTag>{job.experience}</JobTag>
                    </JobMeta>
                  </div>
                  <ApplyButton onClick={() => handleApply(job.id)}>
                    Apply Now
                  </ApplyButton>
                </JobHeader>
                
                <JobDescription>{job.description}</JobDescription>
                
                <JobRequirements>
                  <h4>Requirements:</h4>
                  <ul>
                    {job.requirements.map((req, index) => (
                      <li key={index}>{req}</li>
                    ))}
                  </ul>
                </JobRequirements>
                
                <JobRequirements>
                  <h4>Benefits:</h4>
                  <ul>
                    {job.benefits.map((benefit, index) => (
                      <li key={index}>{benefit}</li>
                    ))}
                  </ul>
                </JobRequirements>
              </JobCard>
            ))
          ) : (
            <NoJobsMessage>
              <h3>No Open Positions</h3>
              <p>
                We don't have any open positions matching your criteria at the moment. 
                However, we're always looking for talented individuals to join our team. 
                Please send your resume to careers@fabricagroup.am and we'll keep it on file 
                for future opportunities.
              </p>
            </NoJobsMessage>
          )}
        </JobsSection>

        <ApplicationSection>
          <h2>How to Apply</h2>
          <p>
            Ready to join the Fabrica Group family? We're excited to hear from you! 
            Please send your resume and a cover letter to our HR team.
          </p>
          
          <ContactInfo>
            <ContactItem>
              <h4>Email</h4>
              <p>careers@fabricagroup.am</p>
            </ContactItem>
            <ContactItem>
              <h4>Phone</h4>
              <p>+374 10 123 456</p>
            </ContactItem>
            <ContactItem>
              <h4>Address</h4>
              <p>Yerevan, Armenia</p>
            </ContactItem>
          </ContactInfo>
        </ApplicationSection>
      </JoinTeamContent>
    </JoinTeamContainer>
  );
} 