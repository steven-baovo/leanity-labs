/* ==========================================================================
   LEANITY LABS - SYSTEM CONTROLLERS
   Medium 3-Column Layout - Dynamic Tab-Routing & Micro-Interactions
   ========================================================================== */

document.addEventListener("DOMContentLoaded", function () {
    
    /* ==========================================================================
       1. Dynamic Tab-Switching Routing (Chuyển đổi Tab trong Feed)
       ========================================================================== */
    const feedTabs = document.querySelectorAll(".feed-tab");
    const tabPanes = document.querySelectorAll(".tab-pane");
    const sidebarLinks = document.querySelectorAll(".sidebar-link");
    
    function switchTab(tabId, subFilter = null) {
        // 1. Update tab navigation headers
        feedTabs.forEach(tab => {
            if (tab.getAttribute("data-tab") === tabId) {
                tab.classList.add("active");
                tab.setAttribute("aria-selected", "true");
            } else {
                tab.classList.remove("active");
                tab.setAttribute("aria-selected", "false");
            }
        });
        
        // 2. Toggle active tab panes
        tabPanes.forEach(pane => {
            if (pane.getAttribute("id") === `tab-${tabId}`) {
                pane.classList.add("active");
            } else {
                pane.classList.remove("active");
            }
        });
        
        // 3. Keep left sidebar nav active states synchronized
        sidebarLinks.forEach(link => {
            const hrefId = link.getAttribute("href").replace("#", "");
            // Maps "about" -> "philosophy", "simulator" -> "simulator", "publications" -> "publications", "connect" -> "connect"
            const mappedTab = (hrefId === "about") ? "philosophy" : 
                               (hrefId === "connect") ? "connect" : hrefId;
                               
            if (mappedTab === tabId) {
                link.classList.add("active");
            } else {
                link.classList.remove("active");
            }
        });
        
        // 4. Handle secondary sub-filters if passed (e.g. from topic tags)
        if (subFilter && tabId === "publications") {
            const filterBtn = document.querySelector(`.filter-btn[data-category="${subFilter}"]`);
            if (filterBtn) filterBtn.click();
        }
        
        // 5. Smooth scroll up to top of main feed to maintain focus
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
    
    // Tab Headers Click Listeners
    feedTabs.forEach(tab => {
        tab.addEventListener("click", function () {
            const tabId = this.getAttribute("data-tab");
            switchTab(tabId);
        });
    });
    
    // Sidebar Links Click Listeners
    sidebarLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const hrefId = this.getAttribute("href").replace("#", "");
            const mappedTab = (hrefId === "about") ? "philosophy" : 
                               (hrefId === "connect") ? "connect" : hrefId;
            switchTab(mappedTab);
        });
    });
    
    // Global Tab Switches Buttons (CTAs, footer links, etc.)
    const switchTabButtons = document.querySelectorAll(".btn-switch-tab");
    switchTabButtons.forEach(btn => {
        btn.addEventListener("click", function (e) {
            e.preventDefault();
            const targetTab = this.getAttribute("data-target");
            const filter = this.getAttribute("data-filter");
            
            // Map href names if needed
            const tabId = (targetTab === "philosophy" || targetTab === "about") ? "philosophy" : 
                          (targetTab === "connect") ? "connect" : targetTab;
                          
            switchTab(tabId, filter);
        });
    });
    
    // Staff Picks Headline Clicks
    const pickHeadlines = document.querySelectorAll(".pick-headline");
    pickHeadlines.forEach((headline, index) => {
        headline.addEventListener("click", function () {
            // Jumps to publications tab and opens the abstract of corresponding index paper
            switchTab("publications");
            const paperCardsList = document.querySelectorAll("#tab-publications .paper-card");
            if (paperCardsList[index]) {
                const abstractBtn = paperCardsList[index].querySelector(".btn-toggle-abstract");
                if (abstractBtn) abstractBtn.click();
            }
        });
    });

    /* ==========================================================================
       2. Lean Systemic Efficiency Simulator (Toán học Vận hành)
       ========================================================================== */
    const sliderCycle = document.getElementById("param-cycle");
    const sliderAutomation = document.getElementById("param-automation");
    const sliderWaste = document.getElementById("param-waste");
    
    const valCycle = document.getElementById("val-cycle");
    const valAutomation = document.getElementById("val-automation");
    const valWaste = document.getElementById("val-waste");
    
    const metricScore = document.getElementById("metric-score");
    const kpiOptimizedCycle = document.getElementById("kpi-optimized-cycle");
    const kpiThroughput = document.getElementById("kpi-throughput");
    const progressBar = document.getElementById("progress-ring-bar");
    
    if (sliderCycle && sliderAutomation && sliderWaste) {
        
        function updateSimulator() {
            // Read inputs
            const originalCycle = parseFloat(sliderCycle.value);
            const automationRate = parseFloat(sliderAutomation.value);
            const wasteRate = parseFloat(sliderWaste.value);
            
            // Render label values
            valCycle.textContent = originalCycle.toFixed(1) + " giờ";
            valAutomation.textContent = automationRate + "%";
            valWaste.textContent = wasteRate + "%";
            
            // --- MATHEMATICAL FORMULAS (LÝ THUYẾT VẬN HÀNH TINH GỌN SỐ) ---
            const automationFactor = 1 - (automationRate / 100) * 0.65;
            const wasteFactor = 1 - ((wasteRate - 5) / 100) * 0.8;
            
            let optimizedCycle = originalCycle * automationFactor * wasteFactor;
            if (optimizedCycle < 0.2) optimizedCycle = 0.2;
            
            const rawScore = 100 - (wasteRate * (1 - (automationRate / 100) * 0.5));
            const leanQuotient = Math.max(20, Math.min(98, Math.round(rawScore)));
            
            const throughputMultiplier = originalCycle / optimizedCycle;
            const cycleReductionPercent = ((originalCycle - optimizedCycle) / originalCycle) * 100;
            
            // --- RENDER SIMULATION RESULTS ---
            metricScore.textContent = leanQuotient;
            kpiOptimizedCycle.textContent = optimizedCycle.toFixed(1) + " giờ";
            
            const badgeCycle = kpiOptimizedCycle.nextElementSibling;
            if (badgeCycle) {
                badgeCycle.textContent = `-${cycleReductionPercent.toFixed(1)}%`;
            }
            
            kpiThroughput.textContent = throughputMultiplier.toFixed(1) + "x";
            
            // --- PROGRESS RING ANIMATION ---
            const circleCircumference = 314.16;
            const strokeDashoffset = circleCircumference - (circleCircumference * (leanQuotient / 100));
            progressBar.style.strokeDashoffset = strokeDashoffset;
        }
        
        // Listeners for sliders
        sliderCycle.addEventListener("input", updateSimulator);
        sliderAutomation.addEventListener("input", updateSimulator);
        sliderWaste.addEventListener("input", updateSimulator);
        
        // Run simulator on load
        updateSimulator();
    }

    /* ==========================================================================
       3. Academic Publications Filters (Bộ lọc Ấn bản)
       ========================================================================== */
    const filterButtons = document.querySelectorAll(".filter-btn");
    const paperCards = document.querySelectorAll("#tab-publications .paper-card");
    
    filterButtons.forEach(btn => {
        btn.addEventListener("click", function () {
            filterButtons.forEach(b => b.classList.remove("active"));
            this.classList.add("active");
            
            const selectedCategory = this.getAttribute("data-category");
            
            paperCards.forEach(card => {
                const cardCategory = card.getAttribute("data-category");
                
                if (selectedCategory === "all" || cardCategory === selectedCategory) {
                    card.style.display = "block";
                    setTimeout(() => {
                        card.style.opacity = "1";
                        card.style.transform = "translateY(0)";
                    }, 50);
                } else {
                    card.style.opacity = "0";
                    card.style.transform = "translateY(8px)";
                    setTimeout(() => {
                        card.style.display = "none";
                    }, 180);
                }
            });
        });
    });

    /* ==========================================================================
       4. Expandable Abstract Toggle (Xem Abstract Tóm tắt)
       ========================================================================== */
    const abstractToggleBtns = document.querySelectorAll(".btn-toggle-abstract");
    
    abstractToggleBtns.forEach(btn => {
        btn.addEventListener("click", function () {
            const targetId = this.getAttribute("data-target");
            const detailsContainer = document.getElementById(targetId);
            
            if (detailsContainer) {
                const isOpen = detailsContainer.classList.contains("open");
                
                if (isOpen) {
                    detailsContainer.classList.remove("open");
                    this.textContent = "Xem Abstract";
                } else {
                    document.querySelectorAll(".paper-details").forEach(el => {
                        el.classList.remove("open");
                    });
                    document.querySelectorAll(".btn-toggle-abstract").forEach(el => {
                        el.textContent = "Xem Abstract";
                    });
                    
                    detailsContainer.classList.add("open");
                    this.textContent = "Ẩn Abstract";
                    
                    // Smooth scroll to focus this paper card
                    const paperCard = this.closest(".paper-card");
                    if (paperCard) {
                        setTimeout(() => {
                            paperCard.scrollIntoView({ behavior: "smooth", block: "nearest" });
                        }, 200);
                    }
                }
            }
        });
    });

    /* ==========================================================================
       5. Medium Clapping Micro-Interaction (Đặc sản Vỗ tay của Medium)
       ========================================================================== */
    const clapWrappers = document.querySelectorAll(".clap-wrapper");
    
    clapWrappers.forEach(clap => {
        clap.addEventListener("click", function () {
            const countEl = this.querySelector(".clap-count");
            let count = parseInt(countEl.textContent);
            
            // Increment
            count += 1;
            countEl.textContent = count;
            
            // Add custom clapping glow/active class
            this.classList.add("active");
            this.style.color = "var(--primary)";
            this.querySelector(".clap-icon").style.fill = "rgba(94, 106, 210, 0.15)";
            this.querySelector(".clap-icon").style.stroke = "var(--primary)";
            
            // Micro scaling pop animation
            this.style.transform = "scale(1.15)";
            setTimeout(() => {
                this.style.transform = "scale(1)";
            }, 120);
        });
    });

    /* ==========================================================================
       6. Collaboration Form Handler (Xử lý Form liên hệ & Toast)
       ========================================================================== */
    const collabForm = document.getElementById("collaboration-form");
    const formToast = document.getElementById("form-toast");
    
    if (collabForm && formToast) {
        collabForm.addEventListener("submit", function (e) {
            e.preventDefault();
            
            const submitBtn = collabForm.querySelector("button[type='submit']");
            const originalBtnText = submitBtn.textContent;
            
            submitBtn.disabled = true;
            submitBtn.textContent = "Đang gửi kết nối...";
            
            setTimeout(() => {
                const userName = document.getElementById("form-name").value;
                
                formToast.innerHTML = `
                    <div style="font-size: 2.2rem; color: #10b981; margin-bottom: 10px;">✓</div>
                    <h4 style="font-family: 'Plus Jakarta Sans', sans-serif; font-weight: 700; margin-bottom: 6px; color: #191919;">Đề xuất đã gửi!</h4>
                    <p style="font-size: 0.75rem; color: #6b6b75; line-height: 1.5; margin-bottom: 14px;">
                        Chào <strong>${userName}</strong>, Ban thư ký Học thuật Leanity Labs đã tiếp nhận đề xuất của bạn. Chúng tôi sẽ phản hồi qua email trong vòng 24 giờ làm việc.
                    </p>
                    <button id="close-toast-btn" class="btn btn-secondary btn-sm" style="width: 100%; border-radius: 9999px;">Xác nhận</button>
                `;
                
                formToast.classList.remove("hidden");
                
                collabForm.reset();
                submitBtn.disabled = false;
                submitBtn.textContent = originalBtnText;
                
                const closeToastBtn = document.getElementById("close-toast-btn");
                if (closeToastBtn) {
                    closeToastBtn.addEventListener("click", function () {
                        formToast.classList.add("hidden");
                    });
                }
                
            }, 900);
        });
    }

    /* ==========================================================================
       7. PDF Download Alert
       ========================================================================== */
    const downloadBtns = document.querySelectorAll(".download-paper-btn");
    
    downloadBtns.forEach(btn => {
        btn.addEventListener("click", function (e) {
            e.preventDefault();
            const paperTitle = this.closest(".paper-card").querySelector(".paper-title").textContent;
            
            alert(`[Leanity Labs] Báo cáo nghiên cứu PDF:\n"${paperTitle}"\nđang được chuẩn bị phát hành chính thức trên thư viện mở SSRN và ResearchGate. Vui lòng quay lại tải bản in đầy đủ trong ít ngày tới!`);
        });
    });
});
