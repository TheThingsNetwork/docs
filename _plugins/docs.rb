module Jekyll
  module DocsFilter

    def docs_content(input)
      input
        .gsub(/(href="[^:"]+\/)index.md((?:#[\da-z-]+)?")/i, '\1\2') # replace local path to /index.md with /
        .gsub(/(href="[^:"]+\.)md((?:#[\da-z-]+)?")/i, '\1html\2') # replace local path to foo.md with foo.html
        .gsub('<table>', '<div class="table-responsive"><table class="table">') # let tables use Bootstrap class and responsive
        .gsub('</table>', '</table></div>')
    end

    def sort_pages(input)
      input.sort do |a, b|
        a_zindex = item_property(a, "zindex")
        b_zindex = item_property(b, "zindex")
        if a_zindex == b_zindex
          a_title = item_property(a, "title")
          b_title = item_property(b, "title")
          if a_title == b_title
            a_label = item_property(a, "label")
            b_label = item_property(b, "label")
            compare(b_label, a_label, - 1)
          else
            compare(a_title, b_title, - 1)
          end
        else 
          compare(b_zindex, a_zindex, - 1)
        end
      end
    end

    def dirname(input)
      File.dirname(input)
    end

    private
    def compare(a, b, nils_order)
      if !a.nil? && b.nil?
        - nils_order
      elsif a.nil? && !b.nil?
        + nils_order
      else
        a <=> b
      end
    end

    private
    def item_property(item, property)
      if item.respond_to?(:to_liquid)
        item.to_liquid[property.to_s]
      elsif item.respond_to?(:data)
        item.data[property.to_s]
      else
        item[property.to_s]
      end
    end

  end
end

Liquid::Template.register_filter(Jekyll::DocsFilter) 