#====================================================================================================
# START - Testing Protocol - DO NOT EDIT OR REMOVE THIS SECTION
#====================================================================================================

# THIS SECTION CONTAINS CRITICAL TESTING INSTRUCTIONS FOR BOTH AGENTS
# BOTH MAIN_AGENT AND TESTING_AGENT MUST PRESERVE THIS ENTIRE BLOCK

# Communication Protocol:
# If the `testing_agent` is available, main agent should delegate all testing tasks to it.
#
# You have access to a file called `test_result.md`. This file contains the complete testing state
# and history, and is the primary means of communication between main and the testing agent.
#
# Main and testing agents must follow this exact format to maintain testing data. 
# The testing data must be entered in yaml format Below is the data structure:
# 
## user_problem_statement: {problem_statement}
## backend:
##   - task: "Task name"
##     implemented: true
##     working: true  # or false or "NA"
##     file: "file_path.py"
##     stuck_count: 0
##     priority: "high"  # or "medium" or "low"
##     needs_retesting: false
##     status_history:
##         -working: true  # or false or "NA"
##         -agent: "main"  # or "testing" or "user"
##         -comment: "Detailed comment about status"
##
## frontend:
##   - task: "Task name"
##     implemented: true
##     working: true  # or false or "NA"
##     file: "file_path.js"
##     stuck_count: 0
##     priority: "high"  # or "medium" or "low"
##     needs_retesting: false
##     status_history:
##         -working: true  # or false or "NA"
##         -agent: "main"  # or "testing" or "user"
##         -comment: "Detailed comment about status"
##
## metadata:
##   created_by: "main_agent"
##   version: "1.0"
##   test_sequence: 0
##   run_ui: false
##
## test_plan:
##   current_focus:
##     - "Task name 1"
##     - "Task name 2"
##   stuck_tasks:
##     - "Task name with persistent issues"
##   test_all: false
##   test_priority: "high_first"  # or "sequential" or "stuck_first"
##
## agent_communication:
##     -agent: "main"  # or "testing" or "user"
##     -message: "Communication message between agents"

# Protocol Guidelines for Main agent
#
# 1. Update Test Result File Before Testing:
#    - Main agent must always update the `test_result.md` file before calling the testing agent
#    - Add implementation details to the status_history
#    - Set `needs_retesting` to true for tasks that need testing
#    - Update the `test_plan` section to guide testing priorities
#    - Add a message to `agent_communication` explaining what you've done
#
# 2. Incorporate User Feedback:
#    - When a user provides feedback that something is or isn't working, add this information to the relevant task's status_history
#    - Update the working status based on user feedback
#    - If a user reports an issue with a task that was marked as working, increment the stuck_count
#    - Whenever user reports issue in the app, if we have testing agent and task_result.md file so find the appropriate task for that and append in status_history of that task to contain the user concern and problem as well 
#
# 3. Track Stuck Tasks:
#    - Monitor which tasks have high stuck_count values or where you are fixing same issue again and again, analyze that when you read task_result.md
#    - For persistent issues, use websearch tool to find solutions
#    - Pay special attention to tasks in the stuck_tasks list
#    - When you fix an issue with a stuck task, don't reset the stuck_count until the testing agent confirms it's working
#
# 4. Provide Context to Testing Agent:
#    - When calling the testing agent, provide clear instructions about:
#      - Which tasks need testing (reference the test_plan)
#      - Any authentication details or configuration needed
#      - Specific test scenarios to focus on
#      - Any known issues or edge cases to verify
#
# 5. Call the testing agent with specific instructions referring to test_result.md
#
# IMPORTANT: Main agent must ALWAYS update test_result.md BEFORE calling the testing agent, as it relies on this file to understand what to test next.

#====================================================================================================
# END - Testing Protocol - DO NOT EDIT OR REMOVE THIS SECTION
#====================================================================================================



#====================================================================================================
# Testing Data - Main Agent and testing sub agent both should log testing data below this section
## user_problem_statement: "Build a spiritual trust website for Sri Bala Tripura Sundari Seva Sadan with WhatsApp-only CTAs, sacred premium design, and fix blank/enable-JS fallback."
## backend: []
## frontend:
##   - task: "Landing site pages + WhatsApp-only CTAs + floating WhatsApp button"
##     implemented: true
##     working: "NA"
##     file: "/app/frontend/src/pages/* and /app/frontend/src/components/SiteLayout.jsx"
##     stuck_count: 0
##     priority: "high"
##     needs_retesting: true
##     status_history:
##       - working: "NA"
##         agent: "main"
##         comment: "Implemented Home/About/Services/Astrology/Gallery(lightbox)/Store(catalog)/Contact with wa.me links and devotional styling. Data is mocked in src/mock.js."
##   - task: "No-JS fallback content to avoid blank screen / enable-JS issue"
##     implemented: true
##     working: "NA"
##     file: "/app/frontend/public/index.html"
##     stuck_count: 0
##     priority: "high"
##     needs_retesting: true
##     status_history:
##       - working: "NA"
##         agent: "main"
##         comment: "Added informative <noscript> with WhatsApp CTA and trust info."
## metadata:
##   created_by: "main_agent"
##   version: "1.0"
##   test_sequence: 1
##   run_ui: true
## test_plan:
##   current_focus:
##     - "Landing site pages + WhatsApp-only CTAs + floating WhatsApp button"
##     - "No-JS fallback content to avoid blank screen / enable-JS issue"
##   stuck_tasks: []
##   test_all: true
##   test_priority: "high_first"
## agent_communication:
##   - agent: "main"
##     message: "Please run UI automation to verify navigation across pages, WhatsApp CTAs open wa.me with prefilled message, gallery filter + lightbox open/close, carousel renders, mobile menu opens/closes, and 404 route. Also quickly sanity-check that <noscript> content exists in index.html (static check)."
##   - agent: "testing"
##     message: "Completed comprehensive UI testing. All major functionality working correctly. Navigation, WhatsApp CTAs, carousel, services tabs, gallery lightbox, 404 page, and noscript content all tested successfully. Minor issue with mobile menu navigation timeout but menu opens correctly. All WhatsApp links contain correct wa.me/919676040411 URLs with devotional message 'Namaskaram 🙏 I would like to enquire about your services. Kindly guide me on the process.' Ready for production."


## user_problem_statement: "Add language toggle (EN⇄తెలుగు) and view-only Panchangam/Calendar PDF rendering with backend streaming, plus enforce language-specific visibility on specified bilingual sections."
## backend:
##   - task: "Serve reference PDFs via /api/reference/{doc} with streaming + anti-download headers"
##     implemented: true
##     working: true
##     file: "/app/backend/server.py"
##     stuck_count: 0
##     priority: "high"
##     needs_retesting: true
##     status_history:
##       - working: true
##         agent: "main"
##         comment: "Added /api/reference/{doc} endpoint streaming panchangam/calendar from backend/storage/reference_pdfs. Returns 204 if missing. Adds no-store + CSP frame-ancestors self."
## frontend:
##   - task: "Language toggle state + persistence (localStorage)"
##     implemented: true
##     working: true
##     file: "/app/frontend/src/context/LanguageContext.jsx, /app/frontend/src/components/SiteLayout.jsx"
##     stuck_count: 1
##     priority: "high"
##     needs_retesting: true
##     status_history:
##       - working: false
##         agent: "main"
##         comment: "Initial toggle click did not update data-lang; fixed LanguageContext to correctly set data-lang + localStorage and added mobile toggle."
##       - working: true
##         agent: "main"
##         comment: "Verified persistence: data-lang becomes 'te' and remains after reload."
##   - task: "Language visibility enforcement (show only selected language) for zodiac pages + founder + bilingual headings"
##     implemented: true
##     working: true
##     file: "/app/frontend/src/index.css, /app/frontend/src/pages/ZodiacDetail.jsx, /app/frontend/src/pages/InnerPages.jsx, /app/frontend/src/pages/Home.jsx"
##     stuck_count: 0
##     priority: "high"
##     needs_retesting: true
##     status_history:
##       - working: true
##         agent: "main"
##         comment: "Implemented .lang-en/.lang-te hide/show via html[data-lang]. Marked bilingual blocks with lang + lang-en/lang-te classes."
##   - task: "View-only PDF rendering for Panchangam/Calendar (no direct public URL)"
##     implemented: true
##     working: true
##     file: "/app/frontend/src/pages/ReferenceViewer.jsx, /app/frontend/src/components/PdfCanvasViewer.jsx"
##     stuck_count: 0
##     priority: "high"
##     needs_retesting: true
##     status_history:
##       - working: true
##         agent: "main"
##         comment: "Uses pdfjs-dist worker served from /public and renders first page to canvas from backend API endpoint; disables right-click and avoids browser PDF viewer UI."
## metadata:
##   created_by: "main_agent"
##   version: "1.1"
##   test_sequence: 2
##   run_ui: true
## test_plan:
##   current_focus:
##     - "Language toggle state + persistence (localStorage)"
##     - "Language visibility enforcement (show only selected language) for zodiac pages + founder + bilingual headings"
##     - "View-only PDF rendering for Panchangam/Calendar (no direct public URL)"
##     - "Serve reference PDFs via /api/reference/{doc} with streaming + anti-download headers"
##   stuck_tasks: []
##   test_all: true
##   test_priority: "high_first"
## agent_communication:
##   - agent: "main"
##     message: "Please verify: language toggle works on desktop+mobile, persists across reload and navigation; zodiac pages show ONLY selected language; about founder bilingual blocks respect toggle; Panchangam/Calendar reference pages render PDF via canvas and do not show download/print UI; backend returns 204 when missing and 200 when present with anti-cache headers."

#====================================================================================================