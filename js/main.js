const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');

// Select tab content item
const selectItem = (e) => {
  removeBorder();
  removeShow();
  const target = e.currentTarget;
  target.classList.add('tab-border');
  // Grab content item from DOM
  const tabContentItem = document.querySelector(`#${target.id}-content`);
  // Add show class
  tabContentItem.classList.add('show');
};

const removeBorder = () => {
  tabItems.forEach(item => {
    item.classList.remove('tab-border');
  });
};

const removeShow = () => {
  tabContentItems.forEach(item => {
    item.classList.remove('show');
  });
};

// Listen for tab click
tabItems.forEach(item => item.addEventListener('click', selectItem));
