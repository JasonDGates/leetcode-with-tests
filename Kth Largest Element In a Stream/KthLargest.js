class KthLargest {
  /**
   * @param {number} k
   * @param {number[]} nums
   * @constructor
   */
  constructor(k, nums) {
      this.heap = new MinHeap(nums, k);
  }

  /**
   * @param {number} val
   * @return {number}
   */
  add(val) {
      this.heap.add(val);
      return this.heap.getMin();
  }
}

class MinHeap {
  /**
   * @param {number[]} nums
   * @param {number} size
   * @constructor
   */
  constructor(nums, size) {
      this.size = size;
      this.length = 0;
      this.heap = [];
      for (const num of nums) {
          this.add(num);
      }
  }

  /**
   * @param {number} num
   * @return {void}
   */
  add(num) {
      if (this.length < this.size) {
          ++this.length;
          this.heap.push(num);
          this.siftUp(this.length - 1);
      } else if (num > this.heap[0]) {
          this.heap[0] = num;
          this.siftDown(0);
      }
  }

  /**
   * @return {number}
   */
  getMin() {
      return this.heap[0];
  }

  /**
   * @param {number} i
   * @return {void}
   */
  siftDown(i) {
      const length = this.length;
      const heap = this.heap;
      let k = i * 2 + 1;
      while (k < length) {
          if (k + 1 < length && heap[k + 1] < heap[k]) {
              ++k;
          }
          if (heap[i] <= heap[k]) {
              return;
          }
          [heap[i], heap[k]] = [heap[k], heap[i]];
          i = k;
          k = i * 2 + 1;
      }
  }

  /**
   * @param {number} i
   * @return {void}
   */
  siftUp(i) {
      const heap = this.heap;
      let p = Math.floor((i - 1) / 2);
      while (i > 0 && heap[i] < heap[p]) {
          [heap[i], heap[p]] = [heap[p], heap[i]];
          i = p;
          p = Math.floor((i - 1) / 2);
      }
  }
}
