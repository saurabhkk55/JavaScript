**Event Propagation Basics:**

- Event propagation is how events move through elements in the Document Object Model (DOM).
- There are three phases: `capturing`, `target`, and `bubbling`.

**Phases Explained:**

1. **`Capturing Phase`:** Events start from the outermost ancestor of the target element and move towards the target.
2. **`Target Phase`:** Events reach the target element and trigger associated listeners.
3. **`Bubbling Phase`:** Events bubble back up from the target to the outermost ancestor.

**In Action:**

**Clicking on #outer:**
- Only the `#outer` listener fires as it's set to capture events.
- No other actions occur since the click is within `#outer`.

**Clicking on #inner:**
- The `#outer` listener fires first (capturing phase).
- Then, the `#inner` listener fires (target phase) because the click is inside `#inner`.
- No further actions occur.

**Clicking on #target:**
- The `#outer` listener fires first (capturing phase) from the outermost ancestor.
- Then, the `#inner` listener fires (target phase) because the click starts in `#inner`.
- Finally, the `#target` listener fires as the event bubbles up.
