// Product Management Core Concepts - Interactive Script

// 数据配置
const CONFIG = {
    storyMapData: [
        {
            activity: 'Login/Register',
            steps: [
                {
                    name: 'Register Account',
                    stories: [
                        { text: 'As a new user, I want to be able to register with my phone number, so that I can quickly create an account.', release: 'mvp' },
                        { text: 'As a new user, I want to be able to register with my email address, so that I have a secure login option.', release: 'v1' },
                    ]
                },
                {
                    name: 'Login',
                    stories: [
                        { text: 'As a user, I want to log in with my phone number and password, so that I can access my account.', release: 'mvp' },
                        { text: 'As a user, I want to be able to log in quickly using WeChat, so that the process is more convenient.', release: 'v2' },
                    ]
                }
            ]
        },
        {
            activity: 'Browse Products',
            steps: [
                {
                    name: 'Search Products',
                    stories: [
                        { text: 'As a buyer, I want to be able to search for products by keyword, so that I can find what I need quickly.', release: 'mvp' },
                        { text: 'As a buyer, I want to be able to filter products by category, so that I can narrow down my choices.', release: 'mvp' },
                        { text: 'As a buyer, I want to be able to sort products by price, so that I can find items within my budget.', release: 'v1' },
                    ]
                },
                {
                    name: 'View Details',
                    stories: [
                        { text: 'As a buyer, I want to see high-resolution product images, so that I can inspect the product quality.', release: 'mvp' },
                        { text: 'As a buyer, I want to see other users\' reviews, so that I can make an informed purchasing decision.', release: 'mvp' },
                        { text: 'As a buyer, I want to see the product\'s detailed specifications, so that I can understand its features.', release: 'v1' },
                    ]
                },
                {
                    name: 'Add to Cart',
                    stories: [
                        { text: 'As a buyer, I want to be able to add a product to my shopping cart, so that I can purchase it later.', release: 'mvp' },
                    ]
                }
            ]
        },
        {
            activity: 'Post Products',
            steps: [
                {
                    name: 'Fill in Info',
                    stories: [
                        { text: 'As a seller, I want to be able to fill in a product\'s title and description, so that I can list it for sale.', release: 'v1' },
                        { text: 'As a seller, I want to be able to upload product images, so that buyers can see what they are purchasing.', release: 'v1' },
                    ]
                },
                {
                    name: 'Set Price',
                    stories: [
                        { text: 'As a seller, I want to be able to set the price and inventory for my product, so that I can manage my listings.', release: 'v1' },
                    ]
                }
            ]
        },
        {
            activity: 'Transaction',
            steps: [
                {
                    name: 'Place Order',
                    stories: [
                        { text: 'As a buyer, I want to be able to place an order for items in my cart, so that I can buy them.', release: 'mvp' },
                        { text: 'As a buyer, I want to be able to enter my shipping address, so that the product can be delivered to me.', release: 'mvp' },
                    ]
                },
                {
                    name: 'Payment',
                    stories: [
                        { text: 'As a buyer, I want to be able to pay with Alipay, so that I can complete my purchase.', release: 'mvp' },
                        { text: 'As a buyer, I want to be able to pay with WeChat Pay, so that I have more payment options.', release: 'v1' },
                        { text: 'As a buyer, I want to be able to pay with a credit card, so that I can use my preferred payment method.', release: 'v2' },
                    ]
                }
            ]
        },
        {
            activity: 'Review',
            steps: [
                {
                    name: 'Leave a Review',
                    stories: [
                        { text: 'As a buyer, I want to be able to leave a review for a completed order, so that I can share my experience.', release: 'v1' },
                        { text: 'As a buyer, I want to be able to rate a product, so that other buyers can see its quality.', release: 'v1' },
                    ]
                },
                {
                    name: 'View Reviews',
                    stories: [
                        { text: 'As a seller, I want to be able to see the reviews left by buyers, so that I can improve my products and service.', release: 'v1' },
                    ]
                }
            ]
        }
    ],

    backlogData: [
        { text: 'User logs in with phone number and password', priority: 'must' },
        { text: 'User searches for products by keyword', priority: 'must' },
        { text: 'User views product details and reviews', priority: 'must' },
        { text: 'User adds to cart and places an order', priority: 'must' },
        { text: 'User completes payment with Alipay', priority: 'must' },
        { text: 'User filters products by category', priority: 'should' },
        { text: 'Seller posts a product (basic functionality)', priority: 'should' },
        { text: 'User leaves a review for an order', priority: 'should' },
        { text: 'User pays with WeChat Pay', priority: 'could' },
        { text: 'User sorts products by price', priority: 'could' },
        { text: 'User registers with an email address', priority: 'could' },
    ],

    // 产品愿景案例库
    visionExamples: [
        {
            name: 'Uber',
            vision: 'For urban residents seeking a convenient way to travel, Who are tired of traffic congestion and parking difficulties, The Uber is an on-demand ride service, That connects passengers and drivers via a mobile app, providing a convenient and efficient travel experience. Unlike traditional taxis, Our product offers more flexible scheduling, transparent pricing, and personalized service.'
        },
        {
            name: 'Airbnb',
            vision: 'For travelers seeking unique and affordable accommodation, Who want authentic local experiences beyond traditional hotels, The Airbnb is a peer-to-peer accommodation platform, That connects hosts with spare rooms to guests seeking memorable stays. Unlike hotel chains, Our product offers personalized experiences, local insights, and community connections.'
        },
        {
            name: 'Spotify',
            vision: 'For music lovers who want instant access to their favorite songs, Who are frustrated by limited music libraries and high costs, The Spotify is a music streaming platform, That provides unlimited access to millions of songs with personalized recommendations. Unlike traditional music purchases, Our product offers discovery features, social sharing, and cross-device synchronization.'
        }
    ],

    // 扩展用户故事库
    additionalStories: {
        'Login/Register': {
            'Register Account': [
                'As a new user, I want to verify my phone number with SMS, so that my account is secure.',
                'As a new user, I want to set up my profile during registration, so that I can personalize my experience.',
                'As a new user, I want to agree to terms and conditions, so that I understand my rights and responsibilities.'
            ],
            'Login': [
                'As a user, I want to reset my password if I forget it, so that I can regain access to my account.',
                'As a user, I want to enable two-factor authentication, so that my account is more secure.',
                'As a user, I want to stay logged in on trusted devices, so that I don\'t have to log in repeatedly.'
            ]
        },
        'Browse Products': {
            'Search Products': [
                'As a buyer, I want to see search suggestions as I type, so that I can find products faster.',
                'As a buyer, I want to save my search queries, so that I can quickly repeat common searches.',
                'As a buyer, I want to search by image, so that I can find similar products.'
            ],
            'View Details': [
                'As a buyer, I want to zoom in on product images, so that I can see fine details.',
                'As a buyer, I want to see related products, so that I can compare options.',
                'As a buyer, I want to ask questions about the product, so that I can get clarification from the seller.'
            ]
        }
    }
};

// 存储管理器
class StorageManager {
    constructor(namespace = 'pm-learning-app') {
        this.namespace = namespace;
        this.isAvailable = this.checkAvailability();
    }

    checkAvailability() {
        try {
            const test = '__storage_test__';
            localStorage.setItem(test, test);
            localStorage.removeItem(test);
            return true;
        } catch (e) {
            console.warn('localStorage is not available:', e);
            return false;
        }
    }

    save(key, data) {
        if (!this.isAvailable) return false;

        try {
            const value = JSON.stringify(data);
            localStorage.setItem(`${this.namespace}:${key}`, value);
            return true;
        } catch (e) {
            console.error('Storage save failed:', e);
            return false;
        }
    }

    load(key, defaultValue = null) {
        if (!this.isAvailable) return defaultValue;

        try {
            const value = localStorage.getItem(`${this.namespace}:${key}`);
            return value ? JSON.parse(value) : defaultValue;
        } catch (e) {
            console.error('Storage load failed:', e);
            return defaultValue;
        }
    }

    remove(key) {
        if (!this.isAvailable) return;
        localStorage.removeItem(`${this.namespace}:${key}`);
    }

    clear() {
        if (!this.isAvailable) return;

        Object.keys(localStorage)
            .filter(key => key.startsWith(`${this.namespace}:`))
            .forEach(key => localStorage.removeItem(key));
    }

    exportData() {
        if (!this.isAvailable) return null;

        const data = {
            version: '1.0',
            timestamp: new Date().toISOString(),
            data: {}
        };

        Object.keys(localStorage)
            .filter(key => key.startsWith(`${this.namespace}:`))
            .forEach(key => {
                const shortKey = key.replace(`${this.namespace}:`, '');
                data.data[shortKey] = JSON.parse(localStorage.getItem(key));
            });

        return data;
    }

    importData(data) {
        if (!this.isAvailable || !data || !data.data) return false;

        try {
            Object.keys(data.data).forEach(key => {
                this.save(key, data.data[key]);
            });
            return true;
        } catch (e) {
            console.error('Storage import failed:', e);
            return false;
        }
    }
}

// 全局存储实例
const storage = new StorageManager();

// 工具函数
const Utils = {
    // 显示通知消息
    showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `fixed top-4 right-4 p-4 rounded-lg shadow-lg z-50 ${
            type === 'success' ? 'bg-green-500 text-white' : 
            type === 'error' ? 'bg-red-500 text-white' : 
            'bg-blue-500 text-white'
        }`;
        notification.textContent = message;
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.remove();
        }, 3000);
    },

    // 添加淡入动画
    addFadeInAnimation(element) {
        element.classList.add('fade-in');
    },

    // 平滑滚动到元素
    smoothScrollTo(element) {
        element.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
    }
};

// 移动端导航管理
class MobileNavigation {
    constructor() {
        this.init();
    }

    init() {
        this.createMobileMenu();
        this.bindEvents();
    }

    createMobileMenu() {
        const nav = document.querySelector('nav');
        const desktopNav = nav.querySelector('.hidden.md\\:flex');
        
        if (desktopNav) {
            desktopNav.classList.add('desktop-nav');
            
            // 创建移动端菜单按钮
            const mobileMenuBtn = document.createElement('div');
            mobileMenuBtn.className = 'mobile-menu-btn';
            mobileMenuBtn.innerHTML = '<span></span><span></span><span></span>';
            
            // 创建移动端导航菜单
            const mobileNav = document.createElement('div');
            mobileNav.className = 'mobile-nav';
            mobileNav.innerHTML = `
                <div class="flex flex-col p-4 space-y-4">
                    <a href="#vision" class="nav-link pb-1">Product Vision</a>
                    <a href="#story-map" class="nav-link pb-1">Story Mapping</a>
                    <a href="#backlog" class="nav-link pb-1">Backlog</a>
                    <a href="#pmbok" class="nav-link pb-1">PMBOK Linkage</a>
                </div>
            `;
            
            nav.appendChild(mobileMenuBtn);
            nav.appendChild(mobileNav);
        }
    }

    bindEvents() {
        const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
        const mobileNav = document.querySelector('.mobile-nav');
        
        if (mobileMenuBtn && mobileNav) {
            mobileMenuBtn.addEventListener('click', () => {
                mobileMenuBtn.classList.toggle('active');
                mobileNav.classList.toggle('active');
            });

            // 点击导航链接时关闭菜单
            mobileNav.querySelectorAll('a').forEach(link => {
                link.addEventListener('click', () => {
                    mobileMenuBtn.classList.remove('active');
                    mobileNav.classList.remove('active');
                });
            });
        }
    }
}

// 产品愿景管理器
class VisionManager {
    constructor() {
        this.currentExampleIndex = 0;
        this.init();
    }

    init() {
        this.loadState();
        this.bindEvents();
        this.replaceAIGenerator();
    }

    loadState() {
        // 从 localStorage 加载当前案例索引
        this.currentExampleIndex = storage.load('visionIndex', 0);
    }

    saveState() {
        // 保存当前案例索引到 localStorage
        storage.save('visionIndex', this.currentExampleIndex);
    }

    bindEvents() {
        // 现有的示例按钮
        const visionExampleBtn = document.getElementById('vision-example-btn');
        const visionExample = document.getElementById('vision-example');
        
        if (visionExampleBtn && visionExample) {
            visionExampleBtn.addEventListener('click', () => {
                visionExample.classList.toggle('hidden');
                visionExampleBtn.textContent = visionExample.classList.contains('hidden') ? 
                    'View Uber Example' : 'Hide Uber Example';
            });
        }
    }

    replaceAIGenerator() {
        const generatorSection = document.querySelector('#vision .card:last-child');
        if (generatorSection) {
            generatorSection.innerHTML = `
                <h4 class="text-2xl font-semibold mb-6 text-center">✨Product Vision Examples✨</h4>
                <p class="text-gray-600 mb-4">Explore different product vision examples from successful companies:</p>
                
                <div class="mb-4">
                    <div class="flex flex-wrap gap-2 mb-4">
                        ${CONFIG.visionExamples.map((example, index) => `
                            <button class="vision-example-btn btn-secondary px-4 py-2 rounded-full text-sm ${index === 0 ? 'active' : ''}" 
                                    data-index="${index}">
                                ${example.name}
                            </button>
                        `).join('')}
                    </div>
                </div>
                
                <div id="vision-examples-output" class="p-6 bg-gray-50 rounded-lg border border-gray-200 text-gray-800">
                    ${CONFIG.visionExamples[0].vision}
                </div>
                
                <div class="mt-6 p-4 bg-blue-50 rounded-lg">
                    <h5 class="font-bold text-blue-800 mb-2">💡 Practice Exercise:</h5>
                    <p class="text-blue-700 text-sm">Try creating your own product vision using the Geoffrey Moore template above. Consider: Who is your target customer? What problem are you solving? What makes you different?</p>
                </div>
            `;

            this.bindExampleButtons();
        }
    }

    bindExampleButtons() {
        const buttons = document.querySelectorAll('.vision-example-btn');
        const output = document.getElementById('vision-examples-output');

        // 恢复上次选中的案例
        buttons.forEach((btn, idx) => {
            if (idx === this.currentExampleIndex) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });

        if (output) {
            output.textContent = CONFIG.visionExamples[this.currentExampleIndex].vision;
        }

        buttons.forEach(button => {
            button.addEventListener('click', () => {
                const index = parseInt(button.dataset.index);

                // 保存当前索引
                this.currentExampleIndex = index;
                this.saveState();

                // 更新按钮状态
                buttons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');

                // 更新显示内容
                if (output) {
                    output.textContent = CONFIG.visionExamples[index].vision;
                    Utils.addFadeInAnimation(output);
                }
            });
        });
    }
}

// 故事地图管理器
class StoryMapManager {
    constructor() {
        this.expandedActivities = new Set();
        this.expandedSteps = new Set();
        this.loadedAdditionalStories = new Set();
        this.releaseSlicesVisible = false;
        this.init();
    }

    init() {
        this.loadState();
        this.renderStoryMap();
    }

    loadState() {
        // 从 localStorage 加载状态
        const state = storage.load('storyMap', {});
        this.expandedActivities = new Set(state.expandedActivities || []);
        this.expandedSteps = new Set(state.expandedSteps || []);
        this.loadedAdditionalStories = new Set(state.loadedAdditionalStories || []);
        this.releaseSlicesVisible = state.releaseSlicesVisible || false;
    }

    saveState() {
        // 保存状态到 localStorage
        storage.save('storyMap', {
            expandedActivities: Array.from(this.expandedActivities),
            expandedSteps: Array.from(this.expandedSteps),
            loadedAdditionalStories: Array.from(this.loadedAdditionalStories),
            releaseSlicesVisible: this.releaseSlicesVisible
        });
    }

    renderStoryMap() {
        const storyMapContainer = document.querySelector('#story-map-container .grid');
        if (!storyMapContainer) return;

        storyMapContainer.innerHTML = '';
        CONFIG.storyMapData.forEach((activityData, activityIndex) => {
            const activityCol = document.createElement('div');
            activityCol.className = 'flex flex-col gap-2';
            
            let stepsHtml = activityData.steps.map((step, stepIndex) => {
                let storiesHtml = step.stories.map(story => `
                    <div class="story-map-story p-3 rounded-md shadow-sm text-sm" data-release="${story.release}">
                        ${story.text}
                    </div>
                `).join('');

                return `
                    <div class="story-map-step p-4 rounded-lg cursor-pointer" data-activity-index="${activityIndex}" data-step-index="${stepIndex}">
                        <h6 class="font-semibold">${step.name}</h6>
                        <div class="story-container hidden mt-2 space-y-2">
                            ${storiesHtml}
                            <div class="text-center mt-4">
                                <button class="expand-stories-btn btn-secondary py-1 px-3 rounded-full text-xs">📚 View More Stories</button>
                            </div>
                        </div>
                    </div>
                `;
            }).join('');

            activityCol.innerHTML = `
                <div class="story-map-activity p-4 rounded-lg text-center font-bold cursor-pointer" data-activity-index="${activityIndex}">
                    ${activityData.activity}
                </div>
                <div class="steps-container hidden flex-col gap-2">
                    ${stepsHtml}
                </div>
            `;
            storyMapContainer.appendChild(activityCol);
        });
        
        this.addStoryMapListeners();
        this.addReleaseSlices();
    }

    addStoryMapListeners() {
        // 活动点击事件
        document.querySelectorAll('.story-map-activity').forEach(el => {
            const activityIndex = el.dataset.activityIndex;

            el.addEventListener('click', () => {
                const stepsContainer = el.nextElementSibling;
                const isExpanding = stepsContainer.classList.contains('hidden');

                stepsContainer.classList.toggle('hidden');
                stepsContainer.classList.toggle('flex');

                // 更新展开状态
                if (isExpanding) {
                    this.expandedActivities.add(activityIndex);
                    Utils.addFadeInAnimation(stepsContainer);
                } else {
                    this.expandedActivities.delete(activityIndex);
                }

                this.saveState();
            });

            // 恢复展开状态
            if (this.expandedActivities.has(activityIndex)) {
                const stepsContainer = el.nextElementSibling;
                stepsContainer.classList.remove('hidden');
                stepsContainer.classList.add('flex');
            }
        });

        // 步骤点击事件
        document.querySelectorAll('.story-map-step').forEach(el => {
            const activityIndex = el.dataset.activityIndex;
            const stepIndex = el.dataset.stepIndex;
            const stepKey = `${activityIndex}-${stepIndex}`;

            el.addEventListener('click', (e) => {
                e.stopPropagation();
                const storyContainer = el.querySelector('.story-container');
                const isExpanding = storyContainer.classList.contains('hidden');

                storyContainer.classList.toggle('hidden');

                // 更新展开状态
                if (isExpanding) {
                    this.expandedSteps.add(stepKey);
                    Utils.addFadeInAnimation(storyContainer);
                } else {
                    this.expandedSteps.delete(stepKey);
                }

                this.saveState();
            });

            // 恢复展开状态
            if (this.expandedSteps.has(stepKey)) {
                const storyContainer = el.querySelector('.story-container');
                storyContainer.classList.remove('hidden');
            }
        });

        // 扩展故事按钮事件
        document.querySelectorAll('.expand-stories-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                this.showAdditionalStories(btn);
            });
        });
    }

    showAdditionalStories(button) {
        const stepEl = button.closest('.story-map-step');
        const activityIndex = stepEl.dataset.activityIndex;
        const stepIndex = stepEl.dataset.stepIndex;
        const stepKey = `${activityIndex}-${stepIndex}`;
        const activityName = CONFIG.storyMapData[activityIndex].activity;
        const stepName = CONFIG.storyMapData[activityIndex].steps[stepIndex].name;
        const storyContainer = stepEl.querySelector('.story-container');

        // 检查是否已经加载过
        if (this.loadedAdditionalStories.has(stepKey)) {
            return;
        }

        // 获取预设的额外故事
        const additionalStories = CONFIG.additionalStories[activityName]?.[stepName] || [
            'As a user, I want additional functionality for this step, so that I have more options.',
            'As a user, I want better error handling, so that I know what went wrong.',
            'As a user, I want performance optimization, so that the process is faster.'
        ];

        // 显示额外故事
        additionalStories.forEach(storyText => {
            const storyEl = document.createElement('div');
            storyEl.className = 'story-map-story p-3 rounded-md shadow-sm text-sm bg-blue-50 border-l-4 border-blue-300';
            storyEl.textContent = storyText;
            storyContainer.insertBefore(storyEl, button.parentNode);
            Utils.addFadeInAnimation(storyEl);
        });

        // 记录已加载状态
        this.loadedAdditionalStories.add(stepKey);
        this.saveState();

        // 隐藏按钮并显示提示
        button.style.display = 'none';
        const tip = document.createElement('div');
        tip.className = 'text-xs text-gray-500 text-center mt-2';
        tip.textContent = '✅ Additional stories loaded';
        button.parentNode.appendChild(tip);

        Utils.showNotification('Additional user stories loaded!', 'success');
    }

    addReleaseSlices() {
        const releaseLines = {
            mvp: { top: 0, label: 'MVP' },
            v1: { top: 0, label: 'Version 1.0' },
            v2: { top: 0, label: 'Version 2.0' },
        };

        let maxMvpTop = 0;
        let maxV1Top = 0;

        document.querySelectorAll('.story-map-story').forEach(storyEl => {
            const release = storyEl.dataset.release;
            const top = storyEl.offsetTop + storyEl.offsetHeight;
            if (release === 'mvp' && top > maxMvpTop) {
                maxMvpTop = top;
            }
            if ((release === 'mvp' || release === 'v1') && top > maxV1Top) {
                maxV1Top = top;
            }
        });

        const sliceContainer = document.getElementById('slice-container');
        if (sliceContainer) {
            sliceContainer.innerHTML = `
                <div class="release-slice hidden absolute w-full" style="top: ${maxMvpTop + 20}px;">
                    <span class="bg-[#AD8B73] text-white text-xs font-bold px-2 py-1 rounded-r-full">MVP - Core Experience</span>
                </div>
                <div class="release-slice hidden absolute w-full" style="top: ${maxV1Top + 20}px;">
                    <span class="bg-[#AD8B73] text-white text-xs font-bold px-2 py-1 rounded-r-full">V1.0 - Refined Features</span>
                </div>
            `;

            const releaseToggle = document.getElementById('release-toggle');
            if (releaseToggle) {
                // 恢复切片显示状态
                releaseToggle.checked = this.releaseSlicesVisible;
                if (this.releaseSlicesVisible) {
                    document.querySelectorAll('.release-slice').forEach(slice => {
                        slice.classList.remove('hidden');
                    });
                }

                releaseToggle.addEventListener('change', (e) => {
                    this.releaseSlicesVisible = e.target.checked;
                    this.saveState();

                    document.querySelectorAll('.release-slice').forEach(slice => {
                        slice.classList.toggle('hidden', !e.target.checked);
                    });
                });
            }
        }
    }
}

// 产品待办事项管理器
class BacklogManager {
    constructor() {
        this.currentFilter = 'all';
        this.init();
    }

    init() {
        this.loadState();
        this.renderBacklog(this.currentFilter);
        this.bindFilterEvents();
    }

    loadState() {
        // 从 localStorage 加载当前过滤器
        this.currentFilter = storage.load('backlogFilter', 'all');
    }

    saveState() {
        // 保存当前过滤器到 localStorage
        storage.save('backlogFilter', this.currentFilter);
    }

    renderBacklog(filter = 'all') {
        const backlogItemsContainer = document.getElementById('backlog-items');
        if (!backlogItemsContainer) return;

        backlogItemsContainer.innerHTML = '';
        const filteredItems = filter === 'all' ? 
            CONFIG.backlogData : 
            CONFIG.backlogData.filter(item => item.priority === filter);
        
        if (filteredItems.length === 0) {
            backlogItemsContainer.innerHTML = `<p class="text-gray-500 text-center p-4">No items with this priority.</p>`;
            return;
        }

        filteredItems.forEach((item, index) => {
            const itemEl = document.createElement('div');
            let priorityClass = '';
            let priorityText = '';
            switch(item.priority) {
                case 'must': priorityClass = 'border-red-500'; priorityText = 'Must'; break;
                case 'should': priorityClass = 'border-orange-500'; priorityText = 'Should'; break;
                case 'could': priorityClass = 'border-yellow-500'; priorityText = 'Could'; break;
            }
            itemEl.className = `p-3 bg-white rounded-md border-l-4 ${priorityClass} shadow-sm flex justify-between items-center`;
            itemEl.innerHTML = `
                <span>${item.text}</span>
                <span class="text-xs font-bold text-gray-500">${priorityText}</span>
            `;
            
            // 添加延迟动画
            setTimeout(() => {
                Utils.addFadeInAnimation(itemEl);
            }, index * 100);
            
            backlogItemsContainer.appendChild(itemEl);
        });
    }

    bindFilterEvents() {
        const filtersContainer = document.getElementById('moscow-filters');
        if (filtersContainer) {
            // 恢复过滤器状态
            const buttons = filtersContainer.querySelectorAll('button');
            buttons.forEach(btn => {
                if (btn.dataset.priority === this.currentFilter) {
                    btn.classList.add('active');
                } else {
                    btn.classList.remove('active');
                }
            });

            filtersContainer.addEventListener('click', (e) => {
                if (e.target.tagName === 'BUTTON') {
                    const priority = e.target.dataset.priority;

                    // 更新按钮状态
                    buttons.forEach(btn => btn.classList.remove('active'));
                    e.target.classList.add('active');

                    // 保存过滤器状态
                    this.currentFilter = priority;
                    this.saveState();

                    // 重新渲染
                    this.renderBacklog(priority);

                    Utils.showNotification(`Filtered by: ${priority === 'all' ? 'All priorities' : priority + ' have'}`, 'info');
                }
            });
        }
    }
}

// 键盘导航管理器
class KeyboardNavigationManager {
    constructor() {
        this.init();
    }

    init() {
        this.setupKeyboardNavigation();
        this.setupFocusManagement();
    }
    
    setupKeyboardNavigation() {
        document.addEventListener('keydown', (e) => {
            // ESC键关闭移动菜单
            if (e.key === 'Escape') {
                const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
                const mobileNav = document.querySelector('.mobile-nav');
                if (mobileMenuBtn && mobileNav && mobileNav.classList.contains('active')) {
                    mobileMenuBtn.classList.remove('active');
                    mobileNav.classList.remove('active');
                }
            }
            
            // Tab键导航增强
            if (e.key === 'Tab') {
                this.handleTabNavigation(e);
            }
            
            // 方向键导航故事卡片
            if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
                this.handleArrowNavigation(e);
            }
        });
    }
    
    setupFocusManagement() {
        // 为所有交互元素添加焦点样式
        const focusableElements = document.querySelectorAll(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        
        focusableElements.forEach(element => {
            element.addEventListener('focus', () => {
                element.classList.add('focus-visible');
            });
            
            element.addEventListener('blur', () => {
                element.classList.remove('focus-visible');
            });
        });
    }
    
    handleTabNavigation(e) {
        // 在移动菜单打开时限制Tab导航
        const mobileNav = document.querySelector('.mobile-nav');
        if (mobileNav && mobileNav.classList.contains('active')) {
            const focusableElements = mobileNav.querySelectorAll(
                'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
            );
            
            if (focusableElements.length > 0) {
                const firstElement = focusableElements[0];
                const lastElement = focusableElements[focusableElements.length - 1];
                
                if (e.shiftKey && document.activeElement === firstElement) {
                    e.preventDefault();
                    lastElement.focus();
                } else if (!e.shiftKey && document.activeElement === lastElement) {
                    e.preventDefault();
                    firstElement.focus();
                }
            }
        }
    }
    
    handleArrowNavigation(e) {
        const activeElement = document.activeElement;
        if (activeElement.classList.contains('story-map-story')) {
            e.preventDefault();
            const storyCards = Array.from(document.querySelectorAll('.story-map-story'));
            const currentIndex = storyCards.indexOf(activeElement);
            
            if (e.key === 'ArrowLeft' && currentIndex > 0) {
                storyCards[currentIndex - 1].focus();
            } else if (e.key === 'ArrowRight' && currentIndex < storyCards.length - 1) {
                storyCards[currentIndex + 1].focus();
            }
        }
    }
}

// 导航管理器
class NavigationManager {
    constructor() {
        this.init();
    }

    init() {
        this.bindScrollEvents();
        this.bindNavClicks();
    }

    bindScrollEvents() {
        const navLinks = document.querySelectorAll('.nav-link');
        const sections = document.querySelectorAll('section[id]');
        
        window.addEventListener('scroll', () => {
            let current = '';
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                if (pageYOffset >= sectionTop - 65) {
                    current = section.getAttribute('id');
                }
            });

            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href').includes(current)) {
                    link.classList.add('active');
                }
            });
        });
    }

    bindNavClicks() {
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    Utils.smoothScrollTo(targetElement);
                }
            });
        });
    }
}

// 主应用初始化
class ProductManagementApp {
    constructor() {
        this.init();
    }

    init() {
        // 等待DOM加载完成
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.initializeComponents());
        } else {
            this.initializeComponents();
        }
    }

    initializeComponents() {
        // 初始化各个组件
        new MobileNavigation();
        new VisionManager();
        new StoryMapManager();
        new BacklogManager();
        new NavigationManager();
        new KeyboardNavigationManager();

        // 添加页面加载动画
        this.addPageLoadAnimation();
        
        console.log('Product Management Learning App initialized successfully!');
    }

    addPageLoadAnimation() {
        // 为主要内容区域添加淡入动画
        const mainSections = document.querySelectorAll('main section');
        mainSections.forEach((section, index) => {
            setTimeout(() => {
                Utils.addFadeInAnimation(section);
            }, index * 200);
        });
    }
}

// 错误处理工具
const errorHandler = {
    showError: function(message, context = '') {
        console.error(`Error in ${context}: ${message}`);
        this.showNotification(`发生错误: ${message}`, 'error');
    },
    
    showNotification: function(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `fixed top-4 right-4 z-50 p-4 rounded-lg shadow-lg transition-all duration-300 ${
            type === 'error' ? 'bg-red-500 text-white' : 
            type === 'success' ? 'bg-green-500 text-white' : 
            'bg-blue-500 text-white'
        }`;
        notification.textContent = message;
        
        document.body.appendChild(notification);
        
        // 自动移除通知
        setTimeout(() => {
            notification.style.opacity = '0';
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.parentNode.removeChild(notification);
                }
            }, 300);
        }, 3000);
    }
};

// 加载状态管理
const loadingManager = {
    show: function(target = document.body) {
        const loader = document.createElement('div');
        loader.className = 'loading-overlay';
        loader.innerHTML = `
            <div class="loading-spinner">
                <div class="spinner"></div>
                <p class="mt-4 text-gray-600">加载中...</p>
            </div>
        `;
        target.appendChild(loader);
        return loader;
    },
    
    hide: function(loader) {
        if (loader && loader.parentNode) {
            loader.style.opacity = '0';
            setTimeout(() => {
                if (loader.parentNode) {
                    loader.parentNode.removeChild(loader);
                }
            }, 300);
        }
    }
};

// 启动应用
try {
    // 显示加载状态
    const loader = loadingManager.show();
    
    // 模拟初始化延迟（实际项目中可能是API调用等）
    setTimeout(() => {
        try {
            new ProductManagementApp();
            
            // 隐藏加载状态
            loadingManager.hide(loader);
            
            // 显示成功通知
            errorHandler.showNotification('产品管理学习平台加载完成！', 'success');
        } catch (error) {
            loadingManager.hide(loader);
            errorHandler.showError(error.message, 'Application Initialization');
        }
    }, 500);
    
} catch (error) {
    errorHandler.showError(error.message, 'Application Startup');
}