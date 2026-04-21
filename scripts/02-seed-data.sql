-- Poker Vault Sample Data
-- Insert 10 featured courses and sample content

-- Insert sample courses
INSERT INTO courses (id, title, slug, category, short_description, full_description, instructor_name, level, price, badge, external_drive_link, published_at) 
VALUES 
  -- Poker Fundamentals
  ('550e8400-e29b-41d4-a716-446655440001'::uuid, 'Poker Income System', 'poker-income-system', 'Poker Fundamentals', 'Master the fundamentals of profitable poker', 'A comprehensive guide to building a sustainable poker income. Learn position, ranges, and decision-making frameworks that separate winners from losers.', 'Coach Sarah', 'beginner', 149.00, 'bestseller', 'https://drive.google.com/drive/folders/example1', NOW()),
  
  ('550e8400-e29b-41d4-a716-446655440002'::uuid, 'Poker Quick Start Kit', 'poker-quick-start-kit', 'Poker Fundamentals', 'Start winning in 7 days', 'Fast-track your poker education with our proven quick-start methodology. Perfect for beginners ready to move from theory to tables.', 'Coach Marcus', 'beginner', 79.00, 'community-favorite', 'https://drive.google.com/drive/folders/example2', NOW()),

  -- Cash Game Systems
  ('550e8400-e29b-41d4-a716-446655440003'::uuid, 'Cash Game Domination System', 'cash-game-domination', 'Cash Game Systems', 'Advanced strategies for sustained winning', 'Deep-dive into cash game dynamics, bankroll management, and table selection. Build a system that generates consistent income.', 'Coach Alex', 'intermediate', 199.00, NULL, 'https://drive.google.com/drive/folders/example3', NOW()),
  
  ('550e8400-e29b-41d4-a716-446655440004'::uuid, 'Poker Leak Finder Toolkit', 'poker-leak-finder', 'Exploitative Strategies', 'Find and fix your biggest mistakes', 'Learn to identify profitable exploits in your opponents. Debug your own strategy systematically.', 'Coach Jordan', 'intermediate', 89.00, 'bestseller', 'https://drive.google.com/drive/folders/example4', NOW()),

  ('550e8400-e29b-41d4-a716-446655440005'::uuid, 'Session Review System', 'session-review-system', 'Cash Game Systems', 'Turn every session into a learning opportunity', 'Master the art of efficient session review. Learn what to track, how to analyze, and what to fix.', 'Coach Taylor', 'advanced', 199.00, 'new', 'https://drive.google.com/drive/folders/example5', NOW()),

  -- Tournament Systems
  ('550e8400-e29b-41d4-a716-446655440006'::uuid, 'Tournament Crusher System', 'tournament-crusher', 'Tournament Systems', 'Dominate tournament poker', 'A complete framework for MTT success. From early game positioning to final table push/fold charts.', 'Coach Jamie', 'intermediate', 179.00, NULL, 'https://drive.google.com/drive/folders/example6', NOW()),

  -- PLO Specialist
  ('550e8400-e29b-41d4-a716-446655440007'::uuid, 'PLO Edge System', 'plo-edge-system', 'PLO Specialist Track', 'Become a PLO specialist', 'Complete mastery of pot-limit omaha. Hand selection, equity concepts, and game theory for PLO.', 'Coach Casey', 'advanced', 249.00, 'new', 'https://drive.google.com/drive/folders/example7', NOW()),

  -- Preflop
  ('550e8400-e29b-41d4-a716-446655440008'::uuid, 'Preflop Mastery Blueprint', 'preflop-mastery', 'Preflop Mastery', 'Master preflop decision-making', 'Build your preflop ranges from first principles. Understand opening, 3-betting, and calling strategies.', 'Coach Riley', 'intermediate', 159.00, 'bestseller', 'https://drive.google.com/drive/folders/example8', NOW()),

  -- Exploitative Strategies
  ('550e8400-e29b-41d4-a716-446655440009'::uuid, 'Exploit Lab', 'exploit-lab', 'Exploitative Strategies', 'Extract maximum value from weak opponents', 'Learn to spot patterns and adapt your strategy. Dominate soft games through intelligent exploitation.', 'Coach Morgan', 'advanced', 249.00, NULL, 'https://drive.google.com/drive/folders/example9', NOW()),

  -- Mentorship
  ('550e8400-e29b-41d4-a716-446655440010'::uuid, 'Mentorship Program', 'mentorship-program', 'Coaching / Mentorship', 'Get personalized coaching and guidance', 'One-on-one mentorship from experienced professionals. Personalized course recommendations, hand review, and strategy sessions.', 'Coach Alex', 'all-levels', 499.00, 'community-favorite', 'https://drive.google.com/drive/folders/example10', NOW());

-- Insert modules for first course
INSERT INTO course_modules (course_id, module_number, title, description, lesson_count, duration_minutes, external_drive_link, order_index)
VALUES
  ('550e8400-e29b-41d4-a716-446655440001'::uuid, 1, 'Poker Fundamentals 101', 'Learn hand rankings, position, and pot odds', 5, 180, 'https://drive.google.com/drive/folders/module1', 1),
  ('550e8400-e29b-41d4-a716-446655440001'::uuid, 2, 'Position and Table Dynamics', 'Master position-based strategies and table awareness', 4, 150, 'https://drive.google.com/drive/folders/module2', 2),
  ('550e8400-e29b-41d4-a716-446655440001'::uuid, 3, 'Building Your First Ranges', 'Create simple, profitable opening ranges', 6, 240, 'https://drive.google.com/drive/folders/module3', 3),
  ('550e8400-e29b-41d4-a716-446655440001'::uuid, 4, 'Making Money from Position', 'Extract value from your positional advantage', 5, 200, 'https://drive.google.com/drive/folders/module4', 4),
  ('550e8400-e29b-41d4-a716-446655440001'::uuid, 5, 'Your First Month of Poker', 'Action plan for implementing your first month', 3, 120, 'https://drive.google.com/drive/folders/module5', 5);

-- Insert modules for second course
INSERT INTO course_modules (course_id, module_number, title, description, lesson_count, duration_minutes, external_drive_link, order_index)
VALUES
  ('550e8400-e29b-41d4-a716-446655440002'::uuid, 1, 'Quick Start Fundamentals', 'The bare minimum you need to know', 3, 90, 'https://drive.google.com/drive/folders/qs-module1', 1),
  ('550e8400-e29b-41d4-a716-446655440002'::uuid, 2, 'Day 1-3 Action Plan', 'Your first three days at the tables', 2, 75, 'https://drive.google.com/drive/folders/qs-module2', 2),
  ('550e8400-e29b-41d4-a716-446655440002'::uuid, 3, 'First Week Results', 'Track your progress and optimize', 2, 60, 'https://drive.google.com/drive/folders/qs-module3', 3);

-- Insert sample blog posts
INSERT INTO blog_posts (id, title, slug, category, excerpt, content, author, featured_image_url, published_at)
VALUES
  ('550e8400-e29b-41d4-a716-446655450001'::uuid, 'How I Went from Losing Player to $100K Winner', 'how-i-won-100k', 'Success Stories', 'One student''s journey from breaking even to six figures.', '# My Journey to $100K

I started poker with $500 in my bankroll and absolutely no idea what I was doing...', 'James H.', 'https://images.unsplash.com/photo-1552820728-8ac41f1ce891?w=800', NOW()),

  ('550e8400-e29b-41d4-a716-446655450002'::uuid, 'The Psychology of Winning Poker', 'psychology-of-winning', 'Strategy', 'Master the mental game that separates winners from losers.', '# The Mental Edge

Poker is 30% skill, 70% psychology. Here''s why mental game matters more than hand charts...', 'Dr. Sarah M.', 'https://images.unsplash.com/photo-1516979187457-635ffe35ff81?w=800', NOW()),

  ('550e8400-e29b-41d4-a716-446655450003'::uuid, 'Bankroll Management 101', 'bankroll-management-101', 'Strategy', 'Learn the most critical aspect of poker success.', '# Why Bankroll Management Wins Games

The #1 reason players lose is bad bankroll management. Here''s the system that works...', 'Coach Marcus', 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800', NOW()),

  ('550e8400-e29b-41d4-a716-446655450004'::uuid, 'Exploiting Common Mistakes', 'exploiting-mistakes', 'Strategy', 'Find patterns in how opponents play and profit.', '# The Patterns That Matter

Most players fall into predictable patterns. Here''s how to spot and exploit them...', 'Coach Alex', NULL, NOW()),

  ('550e8400-e29b-41d4-a716-446655450005'::uuid, 'Community Spotlight: May Winners', 'may-winners', 'Community', 'Celebrating our students'' achievements this month.', '# May Winners Circle

Congratulations to this month''s standout students who achieved their goals...', 'Admin', NULL, NOW());
