// ┬  ┌─┐┬ ┬┌─┐┬ ┬┌┬┐
// │  ├─┤└┬┘│ ││ │ │
// ┴─┘┴ ┴ ┴ └─┘└─┘ ┴
// Generate Layout.

const generateLayout = () => {
	let firstButtonsContainer = `
    <div class="buttonsContainer" id="buttons_1"></div>
  `;

	const position = 'beforeend';

	switch (CONFIG.bentoLayout) {
		case 'bento':
			linksBlockLeft.insertAdjacentHTML(position, firstButtonsContainer);
			linksBlockRight.insertAdjacentHTML(position, firstListsContainer);
			linksBlock.classList.remove('reduceGap');
			linksBlock.classList.remove('removeGap');
			break;
		case 'lists':
			linksBlockLeft.insertAdjacentHTML(position, firstListsContainer);
			linksBlockRight.insertAdjacentHTML(position, secondListsContainer);
			linksBlock.classList.add('reduceGap');
			break;
		case 'buttons':
			linksBlockLeft.insertAdjacentHTML(position, firstButtonsContainer);
			linksBlockRight.insertAdjacentHTML(position, secondButtonsContainer);
			linksBlock.classList.add('removeGap');
			break;
		default:
			break;
	}
};

generateLayout();
