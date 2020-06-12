import {createBlock, listBlocks, BLOCKS} from './Blocks';

describe('createBlock', () => {
    it('returns the correct block template when given a matching blockType', () => {
        let block = createBlock('text');

        expect(block.type).toBe('text');
    });

    it('returns a new copy of the block template', () => {
        const DUMMY_STRING = 'test change';

        let block1 = createBlock('text');
        let block2 = createBlock('text');

        block1.text = DUMMY_STRING;

        expect(block1.text).toBe(DUMMY_STRING);
        expect(block2.text).not.toBe(DUMMY_STRING);
    });

    it('returns null if there is no matching type', () => {
        let block = createBlock('somethingElse');

        expect(block).toBeNull();
    });

});

describe('listBlocks', () => {
    it('returns an array of all blocks', () => {
        let blocks = listBlocks();

        expect(blocks).toHaveLength(BLOCKS.length);
    });

    it('returns only type and title for each block', () => {
        let blocks = listBlocks();

        expect(blocks[0]).toStrictEqual({
            type: expect.any(String), 
            title: expect.any(String)
        });
    });
});
