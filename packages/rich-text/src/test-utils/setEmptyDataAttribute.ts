import { setNodes } from '@udecode/plate-core';
import { Element } from 'slate';

import { RichTextEditor } from '../types';

/**
 * Sets empty node.data attributes. Helpful when testing against
 * output generated by a 3rd-party library e.g. Plate.
 */
export const setEmptyDataAttribute = (root: RichTextEditor) => {
  setNodes(
    root,
    { data: {} },
    {
      at: [],
      match: (node) => Element.isElement(node) && !node.data,
      mode: 'all',
    }
  );
};
